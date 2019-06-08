import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AcercadeInfoSection3Slider, AcercadeInfoSection4Equipo, AcercadeInfoSection6Instalaciones } from './acercadeinterfaces';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  constructor(private firestore: AngularFirestore) { }


  public getAcercadesection1(documentId:string) {

    return this.firestore.collection('Acercade_section1').doc(documentId).snapshotChanges();
  }

  public getAcercadesection2(documentId:string) {

    return this.firestore.collection('Acercade_section2').doc(documentId).snapshotChanges();
  }

  public getInfoacercadeSection3(documentId: string) {

    return this.firestore.collection('Acercade_section3').doc(documentId).snapshotChanges();
  }


  public  getInfoacercadeSection3Slider(documentId: string) {

    return this.firestore.collection('Acercade_section3').doc(documentId).collection<AcercadeInfoSection3Slider>('Comentarios').valueChanges();
  }


  public getInfoacercadeSection4(documentId: string) {

    return this.firestore.collection('Acercade_section4').doc(documentId).snapshotChanges();
  }

  public  getInfoacercadeSection4Equipo(documentId: string) {

    return this.firestore.collection('Acercade_section4').doc(documentId).collection<AcercadeInfoSection4Equipo>('Equipo').valueChanges();
  }

  public getInfoacercadeSection5(documentId: string) {

    return this.firestore.collection('Acercade_section5').doc(documentId).snapshotChanges();
  }


  public getInfoacercadeSection6(documentId: string) {

    return this.firestore.collection('Acercade_section6').doc(documentId).snapshotChanges();
  }

  public  getInfoacercadeSection6Instalaciones(documentId: string) {

    return this.firestore.collection('Acercade_section6').doc(documentId).collection<AcercadeInfoSection6Instalaciones>('Instalaciones').valueChanges();
  }


  public getInfoacercadeSection7(documentId: string) {

    return this.firestore.collection('Acercade_section7').doc(documentId).snapshotChanges();
  }

}
