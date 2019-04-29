import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog.component';
import {RouterModule} from '@angular/router';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { BlogsubmitreviewComponent } from './leftside/blogsubmitreview/blogsubmitreview.component';
import { BlogreviewsComponent } from './blogreviews/blogreviews.component';
import { RelatedblogComponent } from './relatedblog/relatedblog.component';
import { BlogexpertsComponent } from './leftside/blogexperts/blogexperts.component';
import { BlogstaticsComponent } from './leftside/blogstatics/blogstatics.component';

@NgModule({
  declarations: [BlogComponent, BlogdetailsComponent, BlogsubmitreviewComponent, BlogreviewsComponent, RelatedblogComponent, BlogexpertsComponent, BlogstaticsComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent
      }
    ])
  ]
})
export class BlogModule { }
