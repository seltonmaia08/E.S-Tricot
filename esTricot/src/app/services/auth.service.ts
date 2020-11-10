import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  login(user: User){
    return this.afa.signInWithEmailAndPassword(user.email, user.password)
  }

  register(user: User){
    return this.afa.createUserWithEmailAndPassword(user.email, user.password)
  }


  logOut(){
    return this.afa.settings
      .then(() => {
        this.navCtrl.navigateRoot('sign-in')
      })
      .catch(e => console.error(e))
  }

  getAuth(){
    return this.afa
  }

  

}
