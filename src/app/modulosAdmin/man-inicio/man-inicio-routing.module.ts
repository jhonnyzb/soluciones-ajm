import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { AddsliderComponent } from './section1/addslider/addslider.component';
import { DeleteSliderComponent } from './section1/delete-slider/delete-slider.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

const routes: Routes = [

  {
    path: 'section1', component: Section1Component,
    children: [
      {
        path: 'addslider', component: AddsliderComponent
      },
      {
        path: 'deleteslider', component: DeleteSliderComponent
      }
    ]
  },
  {
    path: 'section2', component: Section2Component
  },
  {
    path: 'section3', component: Section3Component
  },
  {
    path: 'section4', component: Section4Component
  },
  {
    path: '',
    redirectTo: 'section1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'section1',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManInicioRoutingModule { }
