import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Transaction } from '../Transaction';
import {TransactionService} from '../transaction.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  EXPENDITURE = 'Wydatek';

  model = new Transaction();
  transactionTypeEnums = [
    'Przychod',
    'Wydatek'
  ];
  transactionKindEnums = [
    'Jedzenie',
    'Rozrywka'
  ];
  isExpenditure = false;
  showNewTranasctionForm = false;

  setShowNewTransactionForm(showNewForm: boolean): void {
    this.showNewTranasctionForm = showNewForm;
  }

  getShowNewTransactionForm(): boolean {
    return this.showNewTranasctionForm;
  }

  onTransactionTypeChange(event: Event): void {
    if(this.model.type === this.EXPENDITURE) {
      this.isExpenditure = true;
    } else {
      this.isExpenditure = false;
    }
  }

  onSubmit(f: NgForm): void {
    this.transactionService.saveTransaction(this.model);
  }

  ngOnInit() {
  }

}
