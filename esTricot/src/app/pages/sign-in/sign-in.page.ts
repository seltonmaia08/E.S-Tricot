import { Component, OnInit, ViewChild } from '@angular/core';
import { IonIcon, IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  nameRegister: string
  emailRegister: string
  emailConfirmRegister: string
  passwordRegister: any
  passwordConfirmRegister: any
  email: string
  password: any

  @ViewChild(IonSlide) slide: IonSlide

  constructor( ) { }

  emailLogin(event){
    this.email = event.target.value
  }
  passwordLogin(event){
    this.password = event.target.value
  }
  
  registerName(event){
    this.nameRegister = event.target.value
  }
  registerEmail(event){
    this.emailRegister = event.target.value
  }
  registerPassword(event){
    this.passwordRegister = event.target.value
  }
  passwordConfirm(event){
    this.passwordConfirmRegister = event.target.value
  }
  emailConfirm(event){
    this.emailConfirmRegister = event.target.value
  }

  register(slides){
    this.slide = slides.slideNext()
  }

  saveRegister(slides){
    this.slide = slides.slidePrev()
    console.log(
      this.nameRegister, 
      this.emailRegister,
      this.emailConfirmRegister, 
      this.passwordRegister, 
      this.passwordConfirmRegister
    )
  }

  ngOnInit() {
  
  }

}
