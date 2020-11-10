import { SignInPage } from './pages/sign-in/sign-in.page';
import { RegisterPage } from './pages/register/register.page';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  pages = [
    {
      title: 'Inicio',
      url: 'home',
      icon: 'home',
      color: 'light'
    },
    {
      title: 'Favoritos',
      url: 'favorite',
      icon: 'heart',
      color: 'danger'
    },
    {
      title: 'Meus Pedidos',
      url: 'my-products',
      icon: 'bag-handle',
      color: 'secondary'
    },
    {
      title: 'Historico de Compras',
      url: 'historic',
      icon: 'document-text',
      color: 'success'
    },
  ]

  logout(){
    this.auth.logOut()
  }
  async addPerson(){
    const modal = await this.modalCtrl.create({
      component: SignInPage,
      backdropDismiss: true
    })

    await modal.present()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
