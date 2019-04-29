import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import {RouterModule} from '@angular/router';
import { NotifSettingComponent } from './notif-setting/notif-setting.component';
import { NotifStaticsComponent } from './notif-statics/notif-statics.component';
import { NotifInfoComponent } from './notif-info/notif-info.component';

@NgModule({
  declarations: [NotificationsComponent, NotifSettingComponent, NotifStaticsComponent, NotifInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotificationsComponent
      }
    ])
  ]
})
export class NotificationsModule { }
