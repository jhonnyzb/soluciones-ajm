import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosiComponent } from './serviciosi.component';

const routes: Routes = [
  {
    path:'', component:ServiciosiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosiRoutingModule { }
