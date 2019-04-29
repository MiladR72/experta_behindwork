import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchpageComponent} from './searchpage.component';
import {RouterModule} from '@angular/router';
import {HomeModule} from '../home/home.module';
import { RelatedQuestionsComponent } from './related-questions/related-questions.component';
import { RelatedQuestionComponent } from './related-questions/related-question/related-question.component';
import {AppComponent} from '../../../../app.component';
import {WordetcPipe} from '../../../Core/Pipes/wordetc.pipe';
import {PersianPipesModule} from 'ngx-persian-pipe';

@NgModule({
  declarations: [SearchpageComponent, RelatedQuestionsComponent, WordetcPipe],
  imports: [
    CommonModule,

    RouterModule.forChild([{
      path:'searchpage',
      component:SearchpageComponent
      }]
    ),HomeModule, PersianPipesModule


  ]
})
export class SearchpageModule { }
