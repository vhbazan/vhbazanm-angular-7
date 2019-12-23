import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly router: Router,
              private readonly authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())  {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
