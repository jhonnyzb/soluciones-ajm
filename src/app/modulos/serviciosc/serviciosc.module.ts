import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioscRoutingModule } from './serviciosc-routing.module';
import { ServicioscComponent } from './serviciosc.component';



@NgModule({
  declarations: [ServicioscComponent],
  imports: [
    CommonModule,  
    ServicioscRoutingModule
  ]
})
export class ServicioscModule { }
