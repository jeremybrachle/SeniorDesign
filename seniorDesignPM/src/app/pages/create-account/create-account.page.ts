import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],

})
export class CreateAccountPage implements OnInit {

  newAccountUsers : FormGroup;

  constructor( private formBuilder : FormBuilder) { 
    this.newAccountUsers = formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(8), Validators.pattern('[a-zA-z0-9!@#$%^&*]*'), Validators.required])],
      passwordCheck: ['', Validators.required] 
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // dob: ['', Validators.required],
      // creditCardNum: ['', Validators.required],
      // creditCardExpDate: ['', Validators.required],
      // billingAddress: ['', Validators.required],
      // dlNum: ['', Validators.required],
      // insurancePhoneNum: ['', Validators.required],
      // insuranceComp: ['', Validators.required],
      // insuranceExp: ['', Validators.required]
    }, {validator: this.checkIfPasswordsMatch('password', 'passwordCheck')});

   }
  
  logForm(){
    console.log(this.newAccountUsers.value);
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
