import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightsidebarComponent } from './rightsidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserStaticsComponent } from './user-statics/user-statics.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [RightsidebarComponent, WelcomeComponent, UserStaticsComponent],
  exports:[RightsidebarComponent],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild()
  ]
})
export class RightsidebarModule { }
