import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Transaction } from './Transaction';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Subject} from 'rxjs/Subject';
import {FormGroup} from "@angular/forms";

@Injectable()
export class TransactionService {

  private transactionsURL = 'http://localhost:8080/transactions';
  private urlSaveTransaction = 'http://localhost:8080/transaction';
  private monthIncomingBalanceURL = 'http://localhost:8080/transactions/monthIncomingBalance';
  private monthSpendingBalanceURL = 'http://localhost:8080/transactions/monthSpendingBalance';

  public subject = new Subject();
/*  subject$ = this.subject.asObservable();*/

  sendSubject() {
    this.subject.next(true);
  }

  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor(private _http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
   return this._http.get<any>(this.transactionsURL)
     .do(data => JSON.stringify(data))
     .catch(this.handleError);
  }

  saveTransaction(transactionForm: FormGroup): void {
    this._http.post(this.urlSaveTransaction, transactionForm.value)
      .subscribe(data => {
          this.sendSubject();
        },
        err => console.log('error', err));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getMonthIncomingBalance(): Observable<string[]> {
    console.log('test getMonthIncomingBalance')
    return this._http.get<any>(this.monthIncomingBalanceURL)
        .do(data => JSON.stringify(data))
        .catch(this.handleError);
  };

  getMonthSpendingBalance(): Observable<string[]> {
    return this._http.get<any>(this.monthSpendingBalanceURL)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }
}
