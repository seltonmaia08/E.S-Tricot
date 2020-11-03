import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  products = [
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
    {
      name: 'Vestido Tricô Modal',
      price: 99.90,
      description: 'Disponível em todos os tamanhos.',
      urlImage: 'assets/images/logo.png'
    },
  ]

  openPageSeeProducts(){
    this.navCtrl.navigateForward('see-products')
  }

  ngOnInit() {
  }

}
