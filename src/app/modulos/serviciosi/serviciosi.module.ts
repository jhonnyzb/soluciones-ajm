import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosiRoutingModule } from './serviciosi-routing.module';
import { ServiciosiComponent } from './serviciosi.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ServiciosiComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServiciosiRoutingModule
  ]
})
export class ServiciosiModule { }
