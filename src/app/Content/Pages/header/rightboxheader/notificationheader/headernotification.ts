import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNotifications {
  headernotifications=[{event: 'چگونه می شود تیم سازی خوبی کرد؟',  image: "./assets/Icons/Svgs/Person.svg" },
    {event: 'چگونه می شود تیم سازی خوبی کرد؟',  image: "./assets/Icons/Svgs/Person.svg" },
    {event: 'چگونه می شود تیم سازی خوبی کرد؟',  image: "./assets/Icons/Svgs/Person.svg" },];
  constructor() { }

}
