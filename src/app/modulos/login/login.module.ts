import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
