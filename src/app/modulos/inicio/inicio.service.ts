import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InicioInterfacesSlider, InicioInterfacesCuerpo, InicioInterfacesPie, InicioInterfacesSection4 } from './iniciointerfaces';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private firestore: AngularFirestore) { }

  public getInfoSlider() {

    return this.firestore.collection<InicioInterfacesSlider>('Pag_Inicio_Slider').valueChanges();
  }

  public getInicioSection2(documentId: string) {

    return this.firestore.collection('Inicio_section2').doc(documentId).snapshotChanges();
  }

  public getInicioSection4() {

    return this.firestore.collection<InicioInterfacesSection4>('Inicio_section4').valueChanges();
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
