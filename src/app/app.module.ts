import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LayoutusuariosComponent } from './layoutusuarios/layoutusuarios.component';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modulos/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    LayoutusuariosComponent,
    LayoutadminComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
