import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private authServices: LoginService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authServices.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/admin'])
        console.log("funciona");
      }).catch(err => console.log('err', err.message))
  }


}
