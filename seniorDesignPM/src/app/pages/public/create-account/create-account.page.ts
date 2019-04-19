import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserManagementService } from '../../../services/user-management.service';
import { Md5 } from 'ts-md5/dist/md5';


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
    private userManagementService: UserManagementService
    ) {
    this.newAccountUsers = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(8), Validators.pattern('[a-zA-z0-9!@#$%^&*]*'), Validators.required])],
      passwordCheck: ['', Validators.required]
    }, {validator: this.checkIfPasswordsMatch('password', 'passwordCheck')});

   }
  
  logForm(){
    console.log(this.newAccountUsers.value);
    // register with the email and hash
    this.userManagementService.registerUser(this.email, Md5.hashStr(this.password));
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
}
