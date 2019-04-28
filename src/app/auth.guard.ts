import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service'
import { map } from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private user: UserService) { }

  canActivate( //If user is logged in it set a value to true, giving access to the dashboard
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isLoggedIn) {
      return true
    }
    return this.user.isLoggedIn().pipe(map(res => {
      if (res.status) {
        this.auth.setLoggedIn(true)
        return true
      } else {
        this.router.navigate(['login'])
        return false
      }
    }))
  };
};
