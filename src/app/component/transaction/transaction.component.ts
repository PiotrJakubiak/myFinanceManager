import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../../service/transaction.service';
import {Transaction} from '../../model/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private transaction: Transaction;
  private errorMessage = '';

  constructor(private activeRoute: ActivatedRoute,
              private transactionService: TransactionService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];

    this.transactionService.getTransaction(id).subscribe(transaction =>
        this.transaction = transaction,
      error => this.errorMessage = error);
  }

}
