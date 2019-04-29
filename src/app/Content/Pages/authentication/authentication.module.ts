import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { SignINComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthenticationComponent
      }
    ])
  ],
  declarations: [AuthenticationComponent, SignINComponent, SignUpComponent, ForgetpassComponent]
})
export class AuthenticationModule { }
