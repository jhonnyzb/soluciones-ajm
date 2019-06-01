import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Noticiasc } from './noticiascinterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiascService {

  constructor(private firestore: AngularFirestore) { }


  public getNoticiasContables() {

    return this.firestore.collection<Noticiasc>('NoticiasContables').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Noticiasc;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
}
