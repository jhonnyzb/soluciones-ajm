import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiassingleComponent } from './noticiassingle.component';

const routes: Routes = [
  {
    path: '', component: NoticiassingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiassingleRoutingModule { }
