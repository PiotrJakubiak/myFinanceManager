import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-person-data',
  templateUrl: './register-person-data.component.html',
  styleUrls: ['./register-person-data.component.css']
})
export class RegisterPersonDataComponent implements OnInit {

  @Input() personData: FormGroup;
  @Output() step = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  test(): void {
    this.step.emit('addressData');
  }

}
