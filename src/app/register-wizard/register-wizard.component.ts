import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let email = c.get('email');
  let confirmEmail = c.get('confirmEmail');

  if (email.pristine && confirmEmail.pristine) {
    return null;
  }
  if (email.value === confirmEmail.value) {
    return null;
  }
  return {'match' : true};
}

@Component({
  selector: 'app-register-wizard',
  templateUrl: './register-wizard.component.html',
  styleUrls: ['./register-wizard.component.css']
})
export class RegisterWizardComponent implements OnInit {

  activeStep = 'personData';
  registerForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      personData: this.formBuilder.group(
        {
        firstName:
          [ '',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(25),
              Validators.pattern('^[a-zA-Z \-\']+')
            ]
          ],
        lastName:
          [ '',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(25),
              Validators.pattern('^[a-zA-Z \-\']+')
            ]
          ],
        pesel: ['',
            [
              Validators.required,
              Validators.minLength(11),
              Validators.maxLength(11),
              Validators.pattern('^[0-9]+')
              // mozliwe dodanie validatora sprawdzajacego checksume peselu
            ]
          ],
        birthDay: ['',
            [
              Validators.required,
              Validators.pattern('^[0-9\\-.]+')
            ]
        ],
          emailGroup: this.formBuilder.group({
            email: ['',
              [
                Validators.required,
                Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
              ]
            ],
            confirmEmail: ['',
              [
                Validators.required
              ]
            ]
          } , { validator: emailMatcher }
            )
      }),
      address: this.formBuilder.group(
        {
          street: ['',
            [
              Validators.required,
              Validators.minLength(5)
            ]
          ],
          number: ['',
            [
              Validators.required
            ]
          ],
          city: ['',
            [
              Validators.required
            ]
          ],
          country: ['',
            [
              Validators.required
            ]
          ],
          zipCode: ['',
            [
              Validators.required
            ]
          ]
        })
    });

    this.registerForm.get('personData').get('pesel').valueChanges.subscribe(
      pesel => this.populateBirthDayFromPesel(pesel)
    );

  }

  handleActiveStep(step: string): void {
    console.log(step)
    this.activeStep = step;
  }

  populateBirthDayFromPesel(pesel: string): void {
    if (this.registerForm.get('personData').get('pesel').valid) {
      let day, month, year = '';
      year = '19' + pesel.substr(0, 2);
      month = pesel.substr(2, 2);
      day = pesel.substr(4, 2);
      const birthDay = (day + '-' + month + '-' + year);
      this.registerForm.get('personData').get('birthDay').patchValue(birthDay);
    }
  }
}
