import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NewblogComponent } from './newblog/newblog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FAQsComponent } from './faqs/faqs.component';
import { RightboxheaderComponent } from './header/rightboxheader/rightboxheader.component';
import { LeftboxheaderComponent } from './header/leftboxheader/leftboxheader.component';
import { NotificationheaderComponent } from './header/rightboxheader/notificationheader/notificationheader.component';
import { SuggestsearchheaderComponent } from './header/leftboxheader/suggestsearchheader/suggestsearchheader.component';
import { HeaderinputComponent } from './header/leftboxheader/headerinput/headerinput.component';
import { NotificationheadercounterComponent } from './header/rightboxheader/notificationheadercounter/notificationheadercounter.component';
import { CenterboxheaderComponent } from './header/centerboxheader/centerboxheader.component';
import { HeaderprofileComponent } from './header/leftboxheader/headerprofile/headerprofile.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularFontAwesomeModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PagesComponent, NewblogComponent, CategoryComponent, HeaderComponent, AboutComponent, FAQsComponent, RightboxheaderComponent, LeftboxheaderComponent, NotificationheaderComponent, SuggestsearchheaderComponent, HeaderinputComponent, NotificationheadercounterComponent, CenterboxheaderComponent, HeaderprofileComponent]
})
export class PagesModule { }
