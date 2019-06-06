import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AcercadeInfoSection3Slider } from './acercadeinterfaces';

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

}
