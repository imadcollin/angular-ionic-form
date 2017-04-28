import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Import these Namespaces/Instances from angular forms 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      'email': ['', [Validators.required]],
      'password': ['', Validators.required]
   });

  }

}
