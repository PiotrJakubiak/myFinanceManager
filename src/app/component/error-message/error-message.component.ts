import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ValidationService} from '../../service/validation/validation.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() control: FormGroup | FormControl;

  get errorMessage() {
    for (let key in this.control.errors) {

      if (this.control.errors.hasOwnProperty(key) && this.control.dirty) {
         return ValidationService.getValidationMessage(key);
      }
    }
    return null;
  }

}
