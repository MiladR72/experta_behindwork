import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import { MostViewedQuestionsComponent } from './most-viewed-questions/most-viewed-questions.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import {SwiperModule} from 'angular2-useful-swiper';
import { WaitAwnserQuestionsComponent } from './wait-awnser-questions/wait-awnser-questions.component';
import { MostViewedBlogsComponent } from './most-viewed-blogs/most-viewed-blogs.component';
import { QuickqueComponent } from './quickque/quickque.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SugestexpertsComponent } from './sugestexperts/sugestexperts.component';
import {AngularResizedEventModule} from 'angular-resize-event';
@NgModule({
  declarations: [HomeComponent, MostViewedQuestionsComponent, SpecialistsComponent, WaitAwnserQuestionsComponent, MostViewedBlogsComponent, QuickqueComponent, SugestexpertsComponent],
  exports: [HomeComponent,MostViewedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:HomeComponent,
      }
    ]),
    SwiperModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AngularResizedEventModule

  ]
})
export class HomeModule { }
