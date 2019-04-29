import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {RouterModule} from '@angular/router';
import { SettingpanelComponent } from './rightside/settingpanel/settingpanel.component';
import { NotificationsettingComponent } from './leftside/notificationsetting/notificationsetting.component';
import { PasswordsettingComponent } from './leftside/passwordsetting/passwordsetting.component';
import { ProfilesettingComponent } from './leftside/profilesetting/profilesetting.component';

@NgModule({
  declarations: [SettingComponent, SettingpanelComponent, NotificationsettingComponent, PasswordsettingComponent, ProfilesettingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:SettingComponent,
        children:[
          {
            path: 'profile',
            component:ProfilesettingComponent
          },
          {
            path: 'password',
            component:PasswordsettingComponent
          }
          ,
          {
            path: 'notifications',
            component:NotificationsettingComponent
          },
        ]
      }
    ])
  ]
})
export class SettingModule { }
