import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import {NewblogComponent} from './newblog/newblog.component';
import {CategoryComponent} from './category/category.component';
const routes: Routes = [
	{

		path:'',
		component: PagesComponent,
    children:[
      {
        path:'',
        loadChildren: './Homepage/homepage.module#HomepageModule',
      },
      {

        path: 'adminpanel',
        // canActivate: [NgxPermissionsGuard],
        loadChildren: './adminpanel/adminpanel.module#AdminpanelModule',
      },
      {
        path:'newblog',
        component: NewblogComponent,
      },
      {
        path:'setting',
        loadChildren: './setting/setting.module#SettingModule',
      },
      {
        path:'category',
        component:CategoryComponent,
      },
      {		path: 'profile',
        // canActivate: [NgxPermissionsGuard],
        loadChildren: './profile/profile.module#ProfileModule',
      },

      {		path: 'notifications',
        // canActivate: [NgxPermissionsGuard],
        loadChildren: './notifications/notifications.module#NotificationsModule',
      }

        // data: {
        // 	permissions: {
        // 		except: ['ADMIN','USER'],
        // 		redirectTo:'/'
        // 	}
        // },

    ]
		// canActivate: [NgxPermissionsGuard],
		// data: {
		// 	permissions: {
		// 		only: ['ADMIN'],
		// 		redirectTo:'userdashboard',
        //
		// 	}
		// },

	},

	{
		path: 'login',
		// canActivate: [NgxPermissionsGuard],
		loadChildren: './authentication/authentication.module#AuthenticationModule',
		// data: {
		// 	permissions: {
		// 		except: ['ADMIN','USER'],
		// 		redirectTo:'/'
		// 	}
		// },
	},


		// data: {
		// 	permissions: {
		// 		except: ['ADMIN','USER'],
		// 		redirectTo:'/'
		// 	}
		// },

	// {
	// 	path: '404',
	// 	component: ErrorPageComponent
	// },
	// {
	// 	path: 'resetpass',
	// 	component: GetComponent
	// },
	// {
	// 	path: 'error/:type',
	// 	component: ErrorPageComponent
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
