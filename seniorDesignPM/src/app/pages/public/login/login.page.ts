import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordModalPage } from '../Modals/forgot-password-modal/forgot-password-modal.page';
import { AuthenticationService } from '../../../services/authentication.service';


import { CarGenerateService } from '../../../services/car-generate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // values of login credentials
  username: string;
  password: string;

  textData: String;

  constructor(
    public modalController: ModalController,
    private authService: AuthenticationService
    ) {
    }

  ngOnInit() {
  }



  // check entered fields against database
  login() {
    // see if the username and password are correct
    this.authService.login(this.username, this.password);

    // clear the password text field if authentication checks out
    this.authService.authenticationState.subscribe(state => {
      if (state) {
        this.password = '';
      }
    });
  }


  async presentResetPWModal() {
    const modal = await this.modalController.create({
      component: ForgotPasswordModalPage
    });

    await modal.present();
  }

}
