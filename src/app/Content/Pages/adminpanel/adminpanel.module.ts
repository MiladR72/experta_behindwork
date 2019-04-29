import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelComponent } from './adminpanel.component';
import {RouterModule} from '@angular/router';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { QueAnsReviewComponent } from './leftdetails/content_management/que-ans-review/que-ans-review.component';
import { ReportsComponent } from './leftdetails/content_management/reports/reports.component';
import { ADblogsComponent } from './leftdetails/content_management/adblogs/adblogs.component';
import { CreateblogComponent } from './leftdetails/content_management/adblogs/createblog/createblog.component';
import { BloglistsComponent } from './leftdetails/content_management/adblogs/bloglists/bloglists.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { ADcategoriesComponent } from './leftdetails/content_management/adcategories/adcategories.component';
import { UsersComponent } from './leftdetails/Users_Management/users/users.component';
import { UserreportsComponent } from './leftdetails/Users_Management/userreports/userreports.component';
import { FeaturedPostsComponent } from './leftdetails/Transmission-Service/featured-posts/featured-posts.component';
import { FeaturedPostsCreateComponent } from './leftdetails/Transmission-Service/featured-posts/featured-posts-create/featured-posts-create.component';
import { FeaturedPostsListsComponent } from './leftdetails/Transmission-Service/featured-posts/featured-posts-lists/featured-posts-lists.component';
import { EmailComponent } from './leftdetails/Transmission-Service/email/email.component';
import { CreateEmailComponent } from './leftdetails/Transmission-Service/email/create-email/create-email.component';
import { RecieveEmailComponent } from './leftdetails/Transmission-Service/email/recieve-email/recieve-email.component';
import { SendEmailComponent } from './leftdetails/Transmission-Service/email/send-email/send-email.component';

@NgModule({
  declarations: [AdminpanelComponent, RightmenuComponent, QueAnsReviewComponent,
    ReportsComponent, ADblogsComponent, CreateblogComponent, BloglistsComponent,
    ADcategoriesComponent, UsersComponent, UserreportsComponent,
    FeaturedPostsComponent,
    FeaturedPostsCreateComponent,
    FeaturedPostsListsComponent,
    EmailComponent,
    CreateEmailComponent,
    RecieveEmailComponent,
    SendEmailComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminpanelComponent,
        children:
          [
            {
              path:'que-ans-review',
              component:QueAnsReviewComponent

            },

            {
              path:'reports',
              component:ReportsComponent

            },

            {
              path:'blogs',
              component:ADblogsComponent,
              children:[
                {
                  path: '',
                  pathMatch: 'full',
                  redirectTo: 'create'
                },
                {
                  path:'create',
                  component:CreateblogComponent
                },
                {
                  path:'lists',
                  component:BloglistsComponent
                },

              ]
            },

            {
              path:'categories',
              component:ADcategoriesComponent

            },

            {
              path:'users',
              component:UsersComponent

            },

            {
              path:'users-reports',
              component:UserreportsComponent

            },
            {
              path:'featured-posts',
              component:FeaturedPostsComponent,
              children:[
                {
                  path: '',
                  pathMatch: 'full',
                  redirectTo: 'create'
                },
                {
                  path:'create',
                  component:FeaturedPostsCreateComponent
                },
                {
                  path:'lists',
                  component:FeaturedPostsListsComponent
                },

              ]

            },
            {
              path:'email',
              component:EmailComponent,
              children:[
                {
                  path: '',
                  pathMatch: 'full',
                  redirectTo: 'create'
                },
                {
                  path:'create',
                  component:CreateEmailComponent
                },
                {
                  path:'recieve',
                  component:RecieveEmailComponent
                },
                {
                  path:'send',
                  component:SendEmailComponent
                },

              ]

            },

          ]
      }
    ])
  ]
})
export class AdminpanelModule { }
