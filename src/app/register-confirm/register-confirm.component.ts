import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.css']
})
export class RegisterConfirmComponent implements OnInit {

  @Input() formData: FormGroup;
  @Output() step = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchToPrev(step: string): void {
    this.step.emit(step);
  }

  test(): void {
    this.step.emit('finish');
  }
}
