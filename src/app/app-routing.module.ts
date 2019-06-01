import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutusuariosComponent } from './layoutusuarios/layoutusuarios.component';




const routes: Routes = [
  {
    path: 'usuarios', component: LayoutusuariosComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: './modulos/inicio/inicio.module#InicioModule', data: { animation: 'Inicio' }
      },
      {
        path: 'acercade',
        loadChildren: './modulos/acercade/acercade.module#AcercadeModule', data: { animation: 'Acercade' }
      },
      {
        path: 'serviciosc',
        loadChildren: './modulos/serviciosc/serviciosc.module#ServicioscModule', data: { animation: 'Serviciosc' }
      },
      {
        path: 'serviciosi',
        loadChildren: './modulos/serviciosi/serviciosi.module#ServiciosiModule', data: { animation: 'Serviciosi' }
      },
      {
        path: 'contactenos',
        loadChildren: './modulos/contactenos/contactenos.module#ContactenosModule', data: { animation: 'Contactenos' }
      },
      {
        path: 'login',  
        loadChildren: './modulos/login/login.module#LoginModule', data: { animation: 'Login' }
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
    redirectTo: 'usuarios',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
