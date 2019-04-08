import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutusuariosComponent } from './layoutusuarios/layoutusuarios.component';



const routes: Routes = [
  {
    path: 'usuarios', component: LayoutusuariosComponent,
      children: [
        {
          path: 'inicio',
          loadChildren: './modulos/inicio/inicio.module#InicioModule'
        },
        {
          path: 'acercade',
          loadChildren: './modulos/acercade/acercade.module#AcercadeModule'
        },
        {
          path: '',
          redirectTo: 'inicio',
          pathMatch: 'full'
        },
      ]
  },

  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
