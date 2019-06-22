import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { LoginService } from '../modulos/login/login-.service';




@Component({
  selector: 'app-layoutadmin',
  templateUrl: './layoutadmin.component.html',
  styleUrls: ['./layoutadmin.component.css']
})
export class LayoutadminComponent implements OnInit, OnDestroy {


  email: string = '';
  dataUserSubscription: Subscription;

  constructor(public afsAuth: AngularFireAuth, private router: Router, private afsAuthservices: LoginService) { }

  ngOnInit() {

    this.getDatauser();
  }


  getDatauser() {

    this.dataUserSubscription = this.afsAuthservices.getDataUser()
      .subscribe(user => {
        this.email = user.email;
      })

  }

  onLogout() {

    Swal.fire({
      title: 'Estas seguro de salir?',
      text: "Esta accion cerrara su sesion actual!",
      type: 'warning',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar sesion!'
    }).then((result) => {
      if (result.value) {
        this.afsAuth.auth.signOut();
        this.router.navigate(['/usuarios/login'])
      }
    })


  }

  ngOnDestroy() {
    this.dataUserSubscription.unsubscribe();
  }

}
