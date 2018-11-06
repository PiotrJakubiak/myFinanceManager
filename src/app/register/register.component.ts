import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      pesel: [''],
      birthDay: [''],
      email: [''],
      address: this.formBuilder.group(
        {
          street: [''],
          number: [''],
          city: [''],
          country: [''],
          zipCode: ['']
        })
    });
  }

  onSubmit(): void {
    console.log(this.registerForm);
  }

}
