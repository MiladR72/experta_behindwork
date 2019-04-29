import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HeaderNotifications} from './headernotification';

@Component({
  selector: 'app-notificationheader',
  templateUrl: './notificationheader.component.html',
  styleUrls: ['./notificationheader.component.css'],
  animations: [trigger('fadeinout1000', [
    state('in',style({
      opacity:'1',
      display: 'initial'
    })),
    state('out',style({
      opacity:'0',
      display: 'none'
    })),
    transition('in <=> out', animate('400ms ease-in'))
  ]),
    trigger('fadeinout300', [
      state('in',style({
        opacity:'1',
        display: 'flex'
      })),
      state('out',style({
        opacity:'0',
        display: 'none'
      })),
      transition('in <=> out', animate('300ms ease-in'))
    ]),
    trigger('headerinout', [
      state('in',style({
        transform: 'translateY(0)',

      })),
      state('out',style({
        transform: 'translateY(-82px)',

      })),
      state('default',style({

      })),
      transition('in <=> out', animate('300ms ease-in')),
      transition('default <=> out', animate('200ms ease-in')),
      transition('default <=> in', animate('200ms ease-in')),
    ]),]
})
export class NotificationheaderComponent implements OnInit {
  async delay(ms: number) {await new Promise(resolve => setTimeout(()=>resolve(), ms));}

  constructor(private headernotificationsclass: HeaderNotifications) {}
  headernotifications1
  notif=false;
  hi="./assets/Icons/Svgs/Person.svg"
  ngOnInit() {
  this.headernotifications1=this.headernotificationsclass.headernotifications;
    this.delay(3000).then(()=>{
      this.notif=!this.notif;
    });
    this.delay(7000).then(()=>{
      this.notif=!this.notif;
    });
  }

}
