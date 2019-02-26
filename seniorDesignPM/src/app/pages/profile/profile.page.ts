import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('profileInfoSlider') profileInfoSlider: any;

  personalInfoSliderForm: FormGroup;
  paymentInfoSliderForm: FormGroup;

  saveAttempt: boolean = false;

  constructor(public navCntrl: NavController, private formBuilder: FormBuilder) {
    this.personalInfoSliderForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(15), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'), Validators.required])],
      phoneNum: ['', Validators.compose([Validators.pattern('(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}'), Validators.required])],
      dob: ['', Validators.required],
      address: ['', Validators.compose([Validators.pattern('\\d+\\s[A-z]+\\s[A-z]+'), Validators.required])],
      city: ['', Validators.compose([Validators.pattern('[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*'), Validators.minLength(2), Validators.required])],
      stateProvince: ['', Validators.required],
      zipPostalCode: ['', Validators.compose([Validators.pattern('[0-9]{5}(?:-[0-9]{4})?'), Validators.minLength(5), Validators.maxLength(9), Validators.required])]
    });

    this.paymentInfoSliderForm = formBuilder.group({
      creditCardType: ['', Validators.required],
      creditCardNum: ['', Validators.compose([Validators.pattern('(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})'), Validators.minLength(13), Validators.maxLength(16), Validators.required])],
      cardHolder: ['', Validators.compose([Validators.maxLength(40), Validators.required])],
      creditCardExpMonth: ['', Validators.required],
      creditCardExpYear: ['', Validators.required],
      billingAddress: ['', Validators.compose([Validators.pattern('\\d+\\s[A-z]+\\s[A-z]+')])],
      bACity: ['', Validators.compose([Validators.pattern('[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*'), Validators.minLength(2)])],
      bAStateProvince: ['',],
      bAZipPostalCode: ['', Validators.compose([Validators.pattern('[0-9]{5}(?:-[0-9]{4})?'), Validators.minLength(5), Validators.maxLength(9)])]
    })
      
      
     
      // dlNum: ['', Validators.required],
      // insurancePhoneNum: ['', Validators.required],
      // insuranceComp: ['', Validators.required],
      // insuranceExp: ['', Validators.required]
   }

  ngOnInit() {
  }

  next(){
    this.profileInfoSlider.slideNext();
  }

  prev(){
    this.profileInfoSlider.slidePrev();
  }
  
  save(){
    
    this.saveAttempt = true;

    if(!this.personalInfoSliderForm.valid){
      this.profileInfoSlider.slideTo(0);
    }
    else if(!this.paymentInfoSliderForm.valid){
      this.profileInfoSlider.slideTo(1);
    }
    else{
      console.log(this.personalInfoSliderForm.value);
      console.log("success")
    }

  }

}
