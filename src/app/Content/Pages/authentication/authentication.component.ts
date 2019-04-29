import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations: [
    trigger('newcompe', [
      state('in',style({
        opacity:'1',
      })),
      state('out',style({
        opacity:'0',
      })),
      transition('in <=> out', animate('1100ms ease-in'))
    ]),


  ]
})

export class AuthenticationComponent implements OnInit {
  @Input() Auth_type:string='SignIn';
  constructor() { }

  ngOnInit() {

  }

}
