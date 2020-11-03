import { RegisterPage } from './../register/register.page';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  userLogin: User = {}
  message: string
  load: any
  toast: any
  modal: any

  constructor(
    private modalCtl: ModalController,
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  async login() {
    this.navCtrl.navigateForward('home')
    // await this.loading()
    // try {
    //   await this.auth.login(this.userLogin)
    //     .then(() => this.navCtrl.navigateForward('home'))
    // }
    // catch (e) {
    //   switch (e.code) {
    //     case 'auth/argument-error':
    //       this.message = "Por favor preencher todos os campos!"
    //       break;
    //     case 'auth/invalid-email':
    //       this.message = "E-mail inválido, por favor verifique o e-mail inserido."
    //       break;
    //     case 'auth/email-already-in-use':
    //       this.message = "E-mail já existente."
    //       break;
    //     case 'auth/wrong-password':
    //       this.message = "E-mail ou senha estão incorretos."
    //       break;
    //     case 'auth/network-request-failed':
    //       this.message = "Erro de conexão."
    //       break;
    //   }
    //   this.toasting(this.message)
    //   console.error(e)
    // }
    // finally {
    //   this.load.dismiss()
    // }

  }
  pageRegister() {
    this.modalPageRegister()
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

  async modalPageRegister() {
    this.modal = await this.modalCtl.create({ component: RegisterPage })
    return this.modal.present()
  }



  ngOnInit() {

  }

}
