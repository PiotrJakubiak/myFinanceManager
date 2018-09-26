import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Transaction } from './Transaction';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TransactionService {

  private transactionsURL = 'http://localhost:8080/transactions';
  private urlSaveTransaction = 'http://localhost:8080/transaction'

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

  saveTransaction(transaction: Transaction): void {
    this._http.post(this.urlSaveTransaction, transaction)
      .subscribe(data => {
          this.sendSubject();
        },
        err => console.log('error', err));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
