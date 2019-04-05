import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeInterfacesSlider, HomeInterfacesCuerpo, HomeInterfacesPie } from './home-interfaces';




@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {
  
  constructor(private firestore: AngularFirestore) 
  {

   }

  public getInfoSlider() {
   
    return this.firestore.collection<HomeInterfacesSlider>('Pag_Inicio_Slider').valueChanges();
  }
  public getInfoCuerpo() {
    
    return this.firestore.collection<HomeInterfacesCuerpo>('Home_Cuerpo').valueChanges();
  }

  public getInfoPieContable() {
    
    return this.firestore.collection<HomeInterfacesPie>('Home_Pie_C').valueChanges();
  }
  public getInfoPieInformatica() {
    
    return this.firestore.collection<HomeInterfacesPie>('Home_Pie_I').valueChanges();
  }
  
}
