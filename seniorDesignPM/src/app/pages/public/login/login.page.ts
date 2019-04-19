import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordModalPage } from '../Modals/forgot-password-modal/forgot-password-modal.page';
import { AuthenticationService } from '../../../services/authentication.service';

// import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // values of login credentials
  username: string;
  password: string;

  constructor(
    public modalController: ModalController,
    private authService: AuthenticationService,
    ) {
    }

  ngOnInit() {
    // initialize as logged out
    this.authService.logout();
  }



  // check entered fields against database
  login() {
    // make a variable to see the return type of the authentication
    let verified: any;
    // see if the username and password are correct
    verified = this.authService.login(this.username, this.password);
    // clear the password text field if the user enters the correct password
    if (verified != null) {
      this.password = '';
    }
  }


  async presentResetPWModal() {
    const modal = await this.modalController.create({
      component: ForgotPasswordModalPage
    });

    await modal.present();
  }

}
