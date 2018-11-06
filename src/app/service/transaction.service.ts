import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Transaction } from '../model/Transaction';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Subject} from 'rxjs/Subject';
import {FormGroup} from '@angular/forms';
import {ChartService} from './chart/chart.service';

@Injectable()
export class TransactionService {

  isInsertDone = false;

  @Output() addingTransactionDone: EventEmitter<boolean> = new EventEmitter();

  private transactionsURL = 'http://localhost:8080/transactions';
  private findOneTransactionURL = 'http://localhost:8080/transaction/';
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
    console.log('czy tu wgl wchodzi?')
   return this._http.get<any>(this.transactionsURL)
     .do(data => {
       console.log(data);
       JSON.stringify(data);
     })
     .catch(this.handleError);
  }

  getTransaction(id: string): Observable<Transaction> {
    console.log('czy tu wgl wchodzi?')
    return this._http.get<Transaction>(this.findOneTransactionURL + id)
      .do(data => {
        console.log(data);
        JSON.stringify(data);
      })
      .catch(this.handleError);
  }

  saveTransaction(transactionForm: FormGroup): void {
    this._http.post(this.urlSaveTransaction, transactionForm.value)
      .subscribe(data => {
        console.log('test' + data);
          this.sendSubject();
          this.isInsertDone = !this.isInsertDone;
          this.addingTransactionDone.emit(this.isInsertDone);
          this.isInsertDone = false;
        },
        err => console.log('FAIL  error', err));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getMonthIncomingBalance(): Observable<string[]> {
    return this._http.get<any>(this.monthIncomingBalanceURL)
        .do(data => JSON.stringify(data))
        .catch(this.handleError);
  }

  getMonthSpendingBalance(): Observable<string[]> {
    return this._http.get<any>(this.monthSpendingBalanceURL)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }
}
