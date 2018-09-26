import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  private PLN = 'PLN';
  private USD = 'USD';
  private EUR = 'EUR';

  transform(value: number, actualCurrency: string): string {
      switch (actualCurrency) {
        case this.PLN : return value + ' ' + this.PLN;
        case this.USD : return value + ' ' + this.USD;
        case this.EUR : return value + ' ' + this.EUR;
        default: return value + ' ' + this.PLN;
      }
  }

}
