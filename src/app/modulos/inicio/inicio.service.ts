import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InicioInterfacesSlider, InicioInterfacesCuerpo, InicioInterfacesPie, InicioInterfacesSection4, InicioInterfacesSection5_1, InicioInterfacesSection5_2, InicioInterfacesSection8 } from './iniciointerfaces';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class InicioService {


  constructor(private firestore: AngularFirestore) { }

  public getInfoSlider() {

    return this.firestore.collection<InicioInterfacesSlider>('Pag_Inicio_Slider').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as InicioInterfacesSlider;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }


  public getInicioSection2(documentId: string) {

    return this.firestore.collection('Inicio_section2').doc(documentId).snapshotChanges();
  }


  public getInicioSection4() {

    return this.firestore.collection<InicioInterfacesSection4>('Inicio_section4').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as InicioInterfacesSection4;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }


  public getInicioSection5_0(documentId: string) {

    return this.firestore.collection('Inicio_section5').doc(documentId).snapshotChanges();
  }


  public getInicioSection5_1(documentId: string) {

    return this.firestore.collection('Inicio_section5').doc(documentId).collection<InicioInterfacesSection5_1>('slide_section5').valueChanges();
  }



  public getInicioSection5_2(documentId: string) {

    return this.firestore.collection('Inicio_section5').doc(documentId).collection<InicioInterfacesSection5_2>('progresbar_section5').valueChanges();
  }


  public getInicioSection8(documentId: string) {

    return this.firestore.collection('Inicio_section8').doc(documentId).snapshotChanges();
  }


  public getInfoCuerpo() {

    return this.firestore.collection<InicioInterfacesCuerpo>('Home_Cuerpo').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as InicioInterfacesCuerpo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }



  public getInfoPieContable() {

    return this.firestore.collection<InicioInterfacesPie>('Home_Pie_C').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as InicioInterfacesPie;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }



  public getInfoPieInformatica() {
    return this.firestore.collection<InicioInterfacesPie>('Home_Pie_I').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as InicioInterfacesPie;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
