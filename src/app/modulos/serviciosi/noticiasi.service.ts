import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Noticiasi } from './noticiasinterfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasiService {

  constructor(private firestore: AngularFirestore) { }


  public ObtenerNoticiasInformaticas() {

    return this.firestore.collection<Noticiasi>('NoticiasInformaticas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Noticiasi;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

}
