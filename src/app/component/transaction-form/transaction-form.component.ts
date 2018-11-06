import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {TransactionService} from '../../service/transaction.service';
import {ChartService} from '../../service/chart/chart.service';

@Component({
  selector: 'app-transaction-form2',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  private showForm = false;
  typeTransactionEnum = [ 'Wydatek', 'Przychod' ];
  kindTransactionEnum = [ 'Jedzenie', 'Alkohol', 'Ubrania', 'Chemia', 'Rozrywka', 'Rachunki'];

  constructor(private formBuilder: FormBuilder,
              private transactionService: TransactionService,
              private chartService: ChartService) { }

  public transactionForm: FormGroup;

  ngOnInit() {
    this.transactionForm = this.formBuilder.group(
      {
        name: ['', Validators.minLength(5)],
        type: ['', [Validators.required]],
        date: ['', [Validators.required]],
        kind: [''],
        amount: ['', [Validators.required]],
        transactionKind: this.formBuilder.group({
          name2: ['']
        })
      });

     this.listenerFormControlValueChanged();

  }

  listenerFormControlValueChanged() {
    this.transactionForm.get('type').valueChanges.subscribe(
      (type: string) => {
         if (type === 'Wydatek') {
           this.transactionForm.get('kind').setValidators([Validators.required]);
         } else {
           this.transactionForm.get('kind').clearValidators();
         }
        this.transactionForm.get('kind').updateValueAndValidity();
      }
    );
  }

  onSubmit(): void {
    this.transactionService.saveTransaction(this.transactionForm);
    this.showForm = !this.showForm;
    this.chartService.refreshChart();
  }

  addNewTransaction() {
    this.transactionForm.reset();
    this.showForm = !this.showForm;
  }
}
