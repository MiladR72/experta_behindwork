import {Component, Input, OnInit, Output} from '@angular/core';
import {Base64icons} from '../../../Core/Data/Icons/base64icons';
import {Subject} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../Core/services/auth.service';
import {ErrorhandlerService} from '../../../Core/services/errorhandler.service';
import {UserLoginModel} from '../../../Core/Models/AUTH/user-login.model';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
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
export class SignINComponent implements OnInit {
  iconsconfig:Base64icons;
  icons:{google:any,linkdin:any}={google:'',linkdin:""};
  @Input() Auth_type: string;
  @Output() Auth_typeChange = new Subject<string>();
  errors: any = [];
  status:boolean;
  loading:boolean=false;
  SignIn:FormGroup;
  User_Details:UserLoginModel;
  constructor(private form:FormBuilder,public Auth:AuthService,
              private errorHandler:ErrorhandlerService,
              private router: Router,
              )
  {
    this.SignIn=this.form.group({
      username:[null,[Validators.required]],
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
  Toggle_type_forget(event:Event){
    (this.Auth_type==='SignIn')?this.Auth_type='Forget':this.Auth_type='SignIn';
    this.Auth_typeChange.next(this.Auth_type);
  }

  Login(){
    if(this.SignIn.valid){
      this.User_Details=this.SignIn.value;
      this.loading=true;
      setTimeout(()=>{
        this.Auth.Login(this.User_Details)
          .subscribe(
            (response)=>{
              console.log(response);
              if(response.success){
                localStorage.setItem('Token',response.token);
                this.loading=false;
                console.log(this.loading);
                this.status=true;
                this.errors=[];
                this.errors.push(this.errorHandler.errorResponeServer(response.success,2));
                this.SignIn.setErrors(null);
                setTimeout(()=>location.replace(''));
              }
              else if(response.success==false){
                this.loading=false;
                this.status=false;
                this.errors=[];
                response.errors.forEach(
                  error=>
                  {
                    this.errors.push(this.errorHandler.errorResponeServer(response.success,error.errCode));
                    // this.SignIn.get(error.field).setErrors({server:true});
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

      console.log(this.User_Details);
    }
    else
    {

    }

  }



}
