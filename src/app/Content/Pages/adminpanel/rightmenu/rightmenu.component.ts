import { Component, OnInit } from '@angular/core';
import {MenuConfig} from '../../../Core/config/menu';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.css']
})
export class RightmenuComponent implements OnInit {
  public configModel: MenuConfig = new MenuConfig();
  adminpanel_menus=this.configModel.config.adminpanel;
  constructor() { }

  ngOnInit() {
  }

}
