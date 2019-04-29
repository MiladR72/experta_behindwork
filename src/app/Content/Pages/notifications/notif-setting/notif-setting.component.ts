import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notif-setting',
  templateUrl: './notif-setting.component.html',
  styleUrls: ['./notif-setting.component.css']
})
export class NotifSettingComponent implements OnInit {
  defualt='active';
  nocategorization;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      query=>{
        if(query['viewtypes']){
          query['viewtypes']=="ALL"?this.defualt="active":this.defualt=null;
        }


      })
  }

}
