import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosiRoutingModule } from './serviciosi-routing.module';
import { ServiciosiComponent } from './serviciosi.component';


@NgModule({
  declarations: [ServiciosiComponent],
  imports: [
    CommonModule,
    ServiciosiRoutingModule
  ]
})
export class ServiciosiModule { }
