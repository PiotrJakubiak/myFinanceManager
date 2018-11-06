import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private error = '';
  username = '';
  password = '';

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      password: ['',
        [
          Validators.required
        ]
      ]
    });
  }

  login() {
    this.username = this.loginForm.controls.login.value;
    this.password = this.loginForm.controls.password.value;

    this.authenticationService.authentication(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/transactions']);
          this.error = '';
        }
      }, error => {
          this.error = error;
      });
  }

}
