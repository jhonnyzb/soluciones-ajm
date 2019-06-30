import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { AddsliderComponent } from './section1/addslider/addslider.component';
import { UpdateSliderComponent } from './section1/update-slider/update-slider.component';
import { DeleteSliderComponent } from './section1/delete-slider/delete-slider.component';

const routes: Routes = [

  {
    path: 'section1', component: Section1Component,
    children: [
      {
        path: 'addslider', component: AddsliderComponent
      },
      {
        path: 'updateslider', component: UpdateSliderComponent
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
