import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManInicioRoutingModule } from './man-inicio-routing.module';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { AddsliderComponent } from './section1/addslider/addslider.component';
import { DeleteSliderComponent } from './section1/delete-slider/delete-slider.component';

@NgModule({
  declarations: [Section1Component, Section2Component, AddsliderComponent, DeleteSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManInicioRoutingModule
  ]
})
export class ManInicioModule { }
