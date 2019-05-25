import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';


import { InicioService } from './inicio.service';
import { IniciocontableComponent } from './iniciocontable/iniciocontable.component';
import { InicioinformaticaComponent } from './inicioinformatica/inicioinformatica.component';

@NgModule({
  declarations: [InicioComponent, IniciocontableComponent, InicioinformaticaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
   
  ],
  providers: [InicioService]
})
export class InicioModule { }
