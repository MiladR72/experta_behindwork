import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftsidebarComponent } from './leftsidebar.component';
import { ViewtypeComponent } from './viewtype/viewtype.component';
import { CategorizationComponent } from './categorization/categorization.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [LeftsidebarComponent, ViewtypeComponent, CategorizationComponent],
  exports: [LeftsidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LeftsidebarModule { }
