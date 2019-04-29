import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notif-info',
  templateUrl: './notif-info.component.html',
  styleUrls: ['./notif-info.component.css']
})
export class NotifInfoComponent implements OnInit {
  constructor() { }
  loading: boolean=false;
  state='defult';
  ngOnInit() {
  }
  Loadmore(){
    this.state='defult';
    this.loading=true;
  }
}
