import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-finish',
  templateUrl: './register-finish.component.html',
  styleUrls: ['./register-finish.component.css']
})
export class RegisterFinishComponent implements OnInit {

  @Input() formData: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
