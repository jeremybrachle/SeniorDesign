import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.page.html',
  styleUrls: ['./forgot-password-modal.page.scss'],
})
export class ForgotPasswordModalPage implements OnInit {

  email: string;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  async presentToast(emailReset) {
    const toast = await this.toastController.create({
      message: 'Check the email sent to: \n' + emailReset,
      duration: 2500
    });
    toast.present();

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
