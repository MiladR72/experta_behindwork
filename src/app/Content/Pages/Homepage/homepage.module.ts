import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {RouterModule} from '@angular/router';
import {LeftsidebarModule} from './leftsidebar/leftsidebar.module';
import {RightsidebarModule} from './rightsidebar/rightsidebar.module';
import {SearchpageModule} from './searchpage/searchpage.module';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component:HomepageComponent,
        children:
          [
            {
              path:'',
              loadChildren:'./home/home.module#HomeModule'
            },
            {
              path:'',
              loadChildren:'./searchpage/searchpage.module#SearchpageModule',
            },

          ]

      }
    ]),
    LeftsidebarModule,
    RightsidebarModule,

  ]
})
export class HomepageModule { }
