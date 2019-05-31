import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioscRoutingModule } from './serviciosc-routing.module';
import { ServicioscComponent } from './serviciosc.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ServicioscComponent],
  imports: [
    CommonModule,  
    SharedModule,
    ServicioscRoutingModule
  ]
})
export class ServicioscModule { }
