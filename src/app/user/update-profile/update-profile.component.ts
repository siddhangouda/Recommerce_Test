import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormControlDirective,NgForm,Validator, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  Updateprofilevalidator: FormGroup;

  // constructor( private formBuilder: FormBuilder ) {
  //   this.Updateprofilevalidator = formBuilder.group({
  //     username : new FormControl(),
  //     email : new FormControl()

  //   });
  //  }


  constructor( private formBuilder: FormBuilder ) {
    this.Updateprofilevalidator = formBuilder.group({
      username : ['', [Validators.required, Validators.minLength(3)]],
      lastname : ['', [Validators.required, Validators.minLength(2)]],
      email : ['', [Validators.required,Validators.email]],
      mobile : ['', [Validators.required, Validators.minLength(10)]],
      terms : ['', Validators.requiredTrue],

      

    });
   }

  ngOnInit(): void {
  }

  senddata(){
    console.log(this.Updateprofilevalidator.value);
  }

}
