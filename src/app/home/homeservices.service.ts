import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {
  //private itemsCollection: AngularFirestoreCollection<any>;
  //items: Observable<any[]>;
  
  constructor(private firestore: AngularFirestore) 
  {

   }

  public getInfoSlider() {
    //this.itemsCollection = this.firestore.collection<any>('Pag_Inicio_Slider');
    //return this.items = this.itemsCollection.valueChanges();
    return this.firestore.collection('Pag_Inicio_Slider').valueChanges();
  }
  public getInfoCuerpo() {
    
    return this.firestore.collection('Home_Cuerpo').valueChanges();
  }

  public getInfoPieContable() {
    
    return this.firestore.collection('Home_Pie_C').valueChanges();
  }
  
}
