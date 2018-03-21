import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {SignupModule} from './signup/signup.module';
import {LoginModule} from './login/login.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';

@NgModule({
  imports: [
    CommonModule,
    SignupModule,
    LoginModule,
    ForgotPasswordModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
