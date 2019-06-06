import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticiassingleService {

  constructor(private firestore: AngularFirestore) { }



  public getNoticiasContables(documentId: string) {
    return this.firestore.collection('NoticiasContables').doc(documentId).snapshotChanges();
  }

  public getNoticiasInformaticas(documentId: string) {
    return this.firestore.collection('NoticiasInformaticas').doc(documentId).snapshotChanges();
  }
}
