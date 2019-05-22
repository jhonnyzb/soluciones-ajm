import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioscComponent } from './serviciosc.component';

const routes: Routes = [
  {
    path: '', component:ServicioscComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioscRoutingModule { }
