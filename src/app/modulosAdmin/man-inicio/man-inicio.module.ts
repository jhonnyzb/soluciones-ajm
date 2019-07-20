import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManInicioRoutingModule } from './man-inicio-routing.module';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { AddsliderComponent } from './section1/addslider/addslider.component';
import { DeleteSliderComponent } from './section1/delete-slider/delete-slider.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { TitleComponent } from './section5/title/title.component';
import { SlideComponent } from './section5/slide/slide.component';
import { ProgessbarComponent } from './section5/progessbar/progessbar.component';

@NgModule({
  declarations: [Section1Component, Section2Component, AddsliderComponent, DeleteSliderComponent, Section3Component, Section4Component, Section5Component, TitleComponent, SlideComponent, ProgessbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManInicioRoutingModule
  ]
})
export class ManInicioModule { }
