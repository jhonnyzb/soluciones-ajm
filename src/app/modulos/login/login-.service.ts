import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afsAuth: AngularFireAuth) { }



  loginEmailUser(email: string, pass: string) {

    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),        
        err => reject(err));
    });
  }


  ResetCorreo(email: string) {
    
    return new Promise<any> ((resolve, reject) => {

      this.afsAuth.auth.sendPasswordResetEmail(email)
        
      .then(userData => resolve(userData),
        err => reject(err));
    });

  }

getDataUser()
{
   return this.afsAuth.authState.pipe(map(auth => auth));
}


}
