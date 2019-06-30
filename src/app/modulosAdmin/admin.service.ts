import { Injectable } from '@angular/core';
import { InicioInterfacesSlider } from '../modulos/inicio/iniciointerfaces';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: AngularFirestore) { }

// home/section1
  createSlider(Slide: InicioInterfacesSlider) {
    return this.firestore.collection('Pag_Inicio_Slider').add(Slide);
  }

  deleteSlide(slideKey: string) {
    return this.firestore.collection('Pag_Inicio_Slider').doc(slideKey).delete();
  }
// end home/section1

}
