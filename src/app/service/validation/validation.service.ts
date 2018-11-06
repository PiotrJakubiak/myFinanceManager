import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  static getValidationMessage(validator: string) {
    const messages = {
      'required': 'Pole wymagane',
      'minlength': 'Wprowadzona wartość jest zbyt krótka'
    };
    return messages[validator];
  }

}
