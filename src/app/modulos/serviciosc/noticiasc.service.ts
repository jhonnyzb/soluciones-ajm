import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Noticias } from './noticiascinterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiascService {

  constructor(private firestore: AngularFirestore) { }


  public getNoticiasContables() {

    return this.firestore.collection<Noticias>('NoticiasContables').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Noticias;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
}
