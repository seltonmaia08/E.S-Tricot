import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  modal: any
  load: any
  toast: any
  userRegister: User = {}
  message: string


  constructor(
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }


  async register() {
    await this.loading()
    try {
      await this.auth.register(this.userRegister)
        .then(() => this.modal.dismiss())
    }
    catch (e) {
      switch (e.code) {
        case 'auth/argument-error':
          this.message = "Por favor preencher todos os campos!"
          break;
        case 'auth/invalid-email':
          this.message = "E-mail inválido, por favor verifique o e-mail inserido."
          break;
        case 'auth/email-already-in-use':
          this.message = "E-mail já existente."
          break;
      }
      this.toasting(this.message)
      console.error(e)
    }
    finally {
      this.load.dismiss()
    }

  }


  //interações 

  async loading() {
    this.load = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...',
      spinner: 'bubbles',
      cssClass: 'myInter'
    })
    return this.load.present()
  }

  async toasting(message) {
    this.toast = await this.toastCtrl.create({
      message,
      position: 'bottom',
      cssClass: 'myInter',
      duration: 3000
    })
    return this.toast.present()
  }

  ngOnInit() {
  }

}
