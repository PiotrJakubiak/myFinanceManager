import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-nav-steps',
  templateUrl: './register-nav-steps.component.html',
  styleUrls: ['./register-nav-steps.component.css']
})
export class RegisterNavStepsComponent implements OnInit {

  @Input() step: string;

  constructor() { }

  ngOnInit() {
  }

}
