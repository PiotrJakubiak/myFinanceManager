import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  static getValidationMessage(validator: string) {
    const messages = {
      'required': 'Pole wymagane',
      'minlength': 'test'
    };
    return messages[validator];
  }

}
