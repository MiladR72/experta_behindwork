import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventpropertyService {
  constructor() {
  }

  public inputdarkness: BehaviorSubject<boolean> =
    new BehaviorSubject(false);
  public headersearchvalue: BehaviorSubject<string> =
    new BehaviorSubject("");


}
