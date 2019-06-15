import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManInicioRoutingModule } from './man-inicio-routing.module';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

@NgModule({
  declarations: [Section1Component, Section2Component],
  imports: [
    CommonModule,
    ManInicioRoutingModule
  ]
})
export class ManInicioModule { }
