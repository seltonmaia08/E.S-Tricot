import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (next.data.roles && !this.auth.getAuth().onAuthStateChanged(next.data.roles)) {
      this.route.navigateByUrl('sign-in');
      return false;
    }

    return true;
  }
}