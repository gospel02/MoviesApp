import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { SignInService} from './sign-in.service';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: SignInService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.user.pipe(
           take(1),
           map(user => !!user),
           tap(loggedIn => {
             if (!loggedIn) {
               console.log('access denied');
               alert('Please Log In');
               this.router.navigate(['/homepage']);
             }
         })
      )
  }
}
