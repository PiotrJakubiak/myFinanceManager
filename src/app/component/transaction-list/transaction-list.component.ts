import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../service/transaction.service';
import {Transaction} from '../../model/Transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public transactions: Transaction[];
  private errorMessage: '';

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getSubject()
      .subscribe(() => {
          this.getTransactions();
        }
      );
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions =>
          this.transactions = transactions,
        error => this.errorMessage = error);
  }



}
