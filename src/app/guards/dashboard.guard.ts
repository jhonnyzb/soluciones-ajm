import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { take, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivateChild {

  constructor(private afsAuth: AngularFireAuth, private router: Router) {

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(autthState => !!autthState))
      .pipe(tap(auth => {
        if (!auth) {
          this.router.navigate(['/usuarios/login']);
        }
      }))
  }

}
