import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layoutadmin',
  templateUrl: './layoutadmin.component.html',
  styleUrls: ['./layoutadmin.component.css']
})
export class LayoutadminComponent implements OnInit {

  constructor(public afsAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit() {
  }

  onLogout() {

    this.afsAuth.auth.signOut();
    this.router.navigate(['/usuarios/login'])
  }

}
