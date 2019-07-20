import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'section5', component: Section5Component,
    children: [
      {
        path: 'title', component: TitleComponent
      },
      {
        path: 'slide', component: SlideComponent
      },
      {
        path: 'barprogres', component: ProgessbarComponent
      },
      {
        path: '',
        redirectTo: 'title',
        pathMatch: 'full'
      },
    ]
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
