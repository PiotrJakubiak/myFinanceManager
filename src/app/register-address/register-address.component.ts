import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {

  @Input() address: FormGroup;
  @Output() step = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.address);
  }

  switchToPrev(step: string): void {
      this.step.emit(step);
  }

  test(): void {
    this.step.emit('confirm');
  }
}
