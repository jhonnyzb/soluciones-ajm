import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { IniciocontableComponent } from './iniciocontable/iniciocontable.component';
import { InicioinformaticaComponent } from './inicioinformatica/inicioinformatica.component';

const routes: Routes = [
  {
    path: 'iniciouno', component: InicioComponent,
      children: [
        {
          path: 'contables', component: IniciocontableComponent
        },
        {
          path: 'informaticas', component: InicioinformaticaComponent
        },
        {
          path: '',
          redirectTo: 'contables',
          pathMatch: 'full'
        },

      ]
  },
  {
    path: '',
    redirectTo: 'iniciouno',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
