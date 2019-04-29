import { Component, Input, OnInit, Output} from '@angular/core';
import {Base64icons} from '../../../Core/Data/Icons/base64icons';
import {Subject} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserRegisterModel} from "../../../Core/Models/AUTH/user-register.model";
import {AuthService} from "../../../Core/services/auth.service";
import {ErrorhandlerService} from '../../../Core/services/errorhandler.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    trigger('newcompe', [
      state('defult',style({
        opacity:'1',
      })),
      state('void',style({
        opacity:'0',
      })),
      transition('void <=> defult', animate('1100ms ease-in'))
    ]),


  ]

})
export class SignUpComponent implements OnInit {
  iconsconfig:Base64icons;
  icons:{google:any,linkdin:any}={google:'',linkdin:""};
  @Input() Auth_type: string;
  @Output() Auth_typeChange = new Subject<string>();
  loading:boolean=false;
  SignUp:FormGroup;
  User_Register:UserRegisterModel;
  errors: any = [];
  status:boolean;
  constructor(
    private form:FormBuilder,public Auth:AuthService,
    private errorHandler:ErrorhandlerService)
  {
    this.SignUp=this.form.group({
      username:[null,[Validators.required]],
      email:[null,[Validators.required]],
      pass:[null,[Validators.required,Validators.minLength(6)]]
    });

  }
  ngOnInit() {
    this.iconsconfig=new Base64icons();
    this.icons.google=this.iconsconfig.Icons.google;
    this.icons.linkdin=this.iconsconfig.Icons.linkdin;
  }
  Toggle_type(event:Event){
    this.Auth_type==='SignIn'?this.Auth_type='SignUp':this.Auth_type='SignIn';
    this.Auth_typeChange.next(this.Auth_type);
  }

  //< ---------------------FUNCTIONS---------------------->//
  Register(){
    if(this.SignUp.valid){
      this.User_Register=this.SignUp.value;
      this.loading=true;
      setTimeout(()=>{
        this.Auth.Register(this.User_Register)
          .subscribe(
            (response)=>{
              console.log(response);
              if(response.success){
                this.loading=false;
                this.status=true;
                this.errors=[];
                this.errors.push(this.errorHandler.errorResponeServer(response.success,1));
                this.SignUp.setErrors(null);

              }
              else if(response.success==false){
                this.loading=false;
                this.status=false;
                this.errors=[];
                response.errors.forEach(
                  error=>
                  {
                    this.errors.push(this.errorHandler.errorResponeServer(response.success,error.errCode));
                    this.SignUp.get(error.field).setErrors({server:true});

                  }
                )

              }
              else{
                this.loading=false;
                this.status=false;
                this.errors=[];
                this.errors.push(this.errorHandler.serverNoConeect());
              }
            }

          );


      },2000);

      console.log(this.User_Register);
    }
    else
    {

    }

  }
  // validate(SignUp: FormGroup) {
  //   if (SignUp.valid) {
  //     return true
  //
  //   }

    // this.errors = [];
    // if (SignUp.get('User_Name').hasError('required')) {
    //   this.errors.push('نام کاربری را وارد کنید');
    // }
    // if (SignUp.get('Email').hasError('required')) {
    //   this.errors.push('ایمیل خود را وارد کنید');
    // }
    //
    // if (SignUp.get('Password').hasError('required')) {
    //   this.errors.push('رمز عبور را وارد کنید');
    // }
    // if (SignUp.get('Password').hasError('minLength')) {
    //   this.errors.push('حداقل تعداد حروف رمز عبور 6 حرف است');
    // }

    // if (this.errors.length > 0) {
    //   this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
    //   this.spinner.active = false;
    // }

  //   return false;
  // }

}
