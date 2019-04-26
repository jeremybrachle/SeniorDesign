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
    private authService: AuthenticationService,
    private carGenerateService: CarGenerateService
    ) {
    }

  ngOnInit() {
    // initialize as logged out
    this.authService.logout();

    // this.http.get('assets/files/test.txt', {responseType: 'text'}).subscribe(data => console.log(data));

    // get text from file that holds car data scraped from site
    // this.http.get('assets/files/out.txt', {responseType: 'text'}
    // ).subscribe(
    //   data => {
    //     this.textData = data;
    //   }
    //   );

    // this.carGenerateService.parseCarData();
    // console.log(this.carGenerateService.getCarsFromDB());

    // this.carGenerateService.getRequest();
    this.carGenerateService.getCarsFromDB();
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

    // this.carGenerateService.parseCarData();
  }


  async presentResetPWModal() {
    const modal = await this.modalController.create({
      component: ForgotPasswordModalPage
    });

    await modal.present();
  }

}
