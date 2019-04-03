import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomecebeceraComponent } from './home/homecebecera/homecebecera.component';
import { HomecuerpoComponent } from './home/homecuerpo/homecuerpo.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeservicesService } from './homeservices.service';
import { HomecontableComponent } from './home/homecontable/homecontable.component';
import { HomeinformaticoComponent } from './home/homeinformatico/homeinformatico.component';

@NgModule({
  declarations: [HomeComponent, HomecebeceraComponent, HomecuerpoComponent, HomecontableComponent, HomeinformaticoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [HomeservicesService],
})
export class HomeModule { }
