import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.auth.isLoggedIn) {
        //this.router.navigate([''])
        return true;
      }  

    return false;
  }



}
