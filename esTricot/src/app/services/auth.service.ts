import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authInterface: Auth
  ) { }

  login(){

  }

  register(){

  }

  authGuard(){
    
  }

  

}
