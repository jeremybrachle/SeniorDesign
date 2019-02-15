import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],

})
export class CreateAccountPage implements OnInit {

  newAccountUsers : FormGroup;

  constructor( private formBuilder : FormBuilder) { 
    this.newAccountUsers = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      creditCardNum: ['', Validators.required],
      creditCardExpDate: ['', Validators.required],
      billingAddress: ['', Validators.required],
      dlNum: ['', Validators.required],
      insurancePhoneNum: ['', Validators.required],
      insuranceComp: ['', Validators.required],
      insuranceExp: ['', Validators.required]
    });
   }
  
  logForm(){
    console.log(this.newAccountUsers.value);
  }

  ngOnInit() {
  }

}
