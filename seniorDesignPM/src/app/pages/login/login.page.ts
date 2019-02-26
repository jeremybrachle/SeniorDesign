import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordModalPage } from "../Modals/forgot-password-modal/forgot-password-modal.page"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentResetPWModal(){
    const modal = await this.modalController.create({
      component: ForgotPasswordModalPage
    });

    await modal.present();
  }

}
