import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Import these Namespaces/Instances from angular forms 
import { FormBuilder, Validators } from '@angular/forms';


import { FormValidation } from './home.validation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 //Declare a property called userForm of type any  
 public  myForm: any;

/*Pass the instance to the constractor */ 
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
 this.myForm = this.formBuilder.group({
  'email': ['', [Validators.required, FormValidation.emailValidator]], 
   'password': ['', [Validators.required,FormValidation.passwordValidator]]
   });

  }

}
