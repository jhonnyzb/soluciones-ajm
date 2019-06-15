import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

const routes: Routes = [

  {
    path: 'section1', component: Section1Component
  },
  {
    path: 'section2', component: Section2Component
  },
  {
    path: '',
    redirectTo: 'section1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManInicioRoutingModule { }
