import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirestoreSettingsToken} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { LayoutusuariosComponent } from './layoutusuarios/layoutusuarios.component';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutusuariosComponent,
    LayoutadminComponent,
    IniciarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
