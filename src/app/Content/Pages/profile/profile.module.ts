import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule} from '@angular/router';
import { ProinfoComponent } from './proinfo/proinfo.component';
import { ProactivityComponent } from './proactivity/proactivity.component';
import { FavscopeComponent } from './leftside/favscope/favscope.component';
import { SimexpertsComponent } from './leftside/simexperts/simexperts.component';
import { PrfollowersComponent } from './prfollowers/prfollowers.component';

@NgModule({
  declarations: [ProfileComponent, ProinfoComponent, ProactivityComponent, FavscopeComponent, SimexpertsComponent, PrfollowersComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent
      }
    ])
  ]
})
export class ProfileModule { }
