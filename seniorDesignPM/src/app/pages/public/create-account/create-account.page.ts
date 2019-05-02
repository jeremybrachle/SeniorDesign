import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserManagementService } from '../../../services/user-management.service';
import { Md5 } from 'ts-md5/dist/md5';
import { CreateAccountSuccessModalPage } from '../Modals/create-account-success-modal/create-account-success-modal.page';
import { CreateAccountFailureModalPage } from '../Modals/create-account-failure-modal/create-account-failure-modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],

})
export class CreateAccountPage implements OnInit {

  // variables
  newAccountUsers: FormGroup;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private userManagementService: UserManagementService,
    public modalController: ModalController
    ) {
    this.newAccountUsers = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(8), Validators.pattern('[a-zA-z0-9!@#$%^&*]*'), Validators.required])],
      passwordCheck: ['', Validators.required]
    }, {validator: this.checkIfPasswordsMatch('password', 'passwordCheck')});

   }
  
  logForm(){
    // register with the email and hash
    this.userManagementService.registerUser(this.email, Md5.hashStr(this.password)).then( (res) => {
      // determine whether or not the username was accepted
      if (res === 1) {
        // display modal for accepting new account and proceed to home page
        console.log('username and password accepted, new account created');
        this.presentSuccessModal();
      } else if (res === 0) {
        // display modal for saying that the username already exists and the new account was not created
        console.log('error, username already exists or network error. account not created.');
        this.presentFailureModal();
      }
    });
  }

  ngOnInit() {
  }
  
  checkIfPasswordsMatch(passwordKey: string, passwordConfirmationKey: string){
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
      passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value){
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  // show successful creation page
  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: CreateAccountSuccessModalPage,
      cssClass: 'create-modal'
    });
    // show the modal
    await modal.present();
  }

  // show successful creation page
  async presentFailureModal() {
    const modal = await this.modalController.create({
      component: CreateAccountFailureModalPage,
      cssClass: 'create-modal'
    });
    // show the modal
    await modal.present();
  }

}
