import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ClickOutsideModule} from 'ng-click-outside';
import {NgxPermissionsModule, NgxPermissionsService} from 'ngx-permissions';
import {IsLoginService} from './Content/Core/services/is-login.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    NgxPermissionsModule.forRoot()

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: IsLoginService, ps: NgxPermissionsService  ) => function() { console.log('dcdc');return ds.load().then(res=>{console.log(res);return ps.loadPermissions(res)})},
      deps: [IsLoginService,NgxPermissionsService],
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
