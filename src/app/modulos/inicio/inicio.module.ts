import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InicioService } from './inicio.service';
import { IniciocontableComponent } from './iniciocontable/iniciocontable.component';
import { InicioinformaticaComponent } from './inicioinformatica/inicioinformatica.component';

@NgModule({
  declarations: [InicioComponent, IniciocontableComponent, InicioinformaticaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [InicioService]
})
export class InicioModule { }
