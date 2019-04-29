import { Component, OnInit } from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';
@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {

  constructor(private ngx :NgxPermissionsService) {
    ngx.permissions$.subscribe((permissions) => {
      console.log(permissions)
    })
  }


  ngOnInit() {

  }

}
