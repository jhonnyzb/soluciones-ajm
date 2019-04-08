import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InicioInterfacesSlider, InicioInterfacesCuerpo, InicioInterfacesPie } from './iniciointerfaces';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private firestore: AngularFirestore) {}

  public getInfoSlider() {

    return this.firestore.collection<InicioInterfacesSlider>('Pag_Inicio_Slider').valueChanges();
  }

  public getInfoCuerpo() {

    return this.firestore.collection<InicioInterfacesCuerpo>('Home_Cuerpo').valueChanges();
  }
  public getInfoPieContable() {

    return this.firestore.collection<InicioInterfacesPie>('Home_Pie_C').valueChanges();
  }
  public getInfoPieInformatica() {

    return this.firestore.collection<InicioInterfacesPie>('Home_Pie_I').valueChanges();
  }
}
