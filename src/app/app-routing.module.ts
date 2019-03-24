import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  //{
  // path: '',
   // loadChildren: './home/home.module#HomeModule'
 // },
 // {
 //   path: 'about',
  //  loadChildren: './about/about.module#AboutModule'
  //},
  //{
   // path: '', component: LayoutPrincipalComponent,
     // children: [
       // { path: '', component: PagInicioComponent, pathMatch: 'full',
      
    //  }

        //{ path: 'nosotros', component: PagNosotrosComponent  }
        //{ path: 'noticia-single', component: NoticiaSingleComponent }
    //  ]
  
  //}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
