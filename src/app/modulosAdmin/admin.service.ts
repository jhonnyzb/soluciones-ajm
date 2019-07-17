import { Injectable } from '@angular/core';
import { InicioInterfacesSlider, InicioInterfacesSection2, InicioInterfacesCuerpo, InicioInterfacesSection4 } from '../modulos/inicio/iniciointerfaces';
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

  updateSlide(id: string, Slide: InicioInterfacesSlider) {
    return this.firestore.collection('Pag_Inicio_Slider').doc(id).update(Slide);
  }
  // end home/section1
  // home/section2
  updatesection2(id: string, infosection2: InicioInterfacesSection2) {
    return this.firestore.collection('Inicio_section2').doc(id).update(infosection2);
  }
  // end home/section2
  // home/section3
  createCard(card: InicioInterfacesCuerpo) {
    return this.firestore.collection('Home_Cuerpo').add(card)
  }

  updateCards(id: string, card: InicioInterfacesCuerpo) {
    return this.firestore.collection('Home_Cuerpo').doc(id).update(card);
  }

  deleteCards(cardsid: string) {
    return this.firestore.collection('Home_Cuerpo').doc(cardsid).delete();
  }
  // end home/section3
  // home/section4
  createGrid(grid: InicioInterfacesSection4) {
    return this.firestore.collection('Inicio_section4').add(grid)
  }

  updateGrid(id: string, grid: InicioInterfacesSection4) {
    return this.firestore.collection('Inicio_section4').doc(id).update(grid);
  }

  deleteGrid(gridid: string) {
    return this.firestore.collection('Inicio_section4').doc(gridid).delete();
  }
 // end home/section4
 
}
