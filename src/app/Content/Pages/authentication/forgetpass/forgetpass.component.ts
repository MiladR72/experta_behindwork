import {Component, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css'],
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
export class ForgetpassComponent implements OnInit {
  @Input() Auth_type: string;
  @Output() Auth_typeChange = new Subject<string>();
  constructor() { }

  ngOnInit() {
  }
  Toggle_type(event:Event){
    this.Auth_type==='SignIn'||this.Auth_type==='SignUp'?this.Auth_type='Forget':this.Auth_type='SignIn';
    this.Auth_typeChange.next(this.Auth_type);
  }
}
