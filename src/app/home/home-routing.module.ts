import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomecontableComponent } from './home/homecontable/homecontable.component';
import { HomeinformaticoComponent } from './home/homeinformatico/homeinformatico.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component:  HomecontableComponent
    },
    {
      path: 'informaticas',
      component:  HomeinformaticoComponent
    },
    { 
      path: '**', 
      component: HomecontableComponent 
    }
   
  ]

},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
