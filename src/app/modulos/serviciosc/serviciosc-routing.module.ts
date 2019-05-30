import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioscComponent } from './serviciosc.component';

const routes: Routes = [
  {
    path: 'servicioscontables', component:ServicioscComponent
  },
  {
    path: '',
    redirectTo: 'servicioscontables',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioscRoutingModule { }
