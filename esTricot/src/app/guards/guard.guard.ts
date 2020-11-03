import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private route: Router

  ){}

  canActivate(): Promise<boolean>{
    return new Promise( resolve => {
      this.auth.getAuth().onAuthStateChanged(user => {
        if (user) this.route.navigate(['sig-in']);

        resolve(user ? true : false)
      })
    })
  }
  
}
