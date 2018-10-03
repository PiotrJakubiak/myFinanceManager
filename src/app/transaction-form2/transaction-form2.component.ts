import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {environment} from "../../environments/environment";
import {Transaction} from "../Transaction";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-form2',
  templateUrl: './transaction-form2.component.html',
  styleUrls: ['./transaction-form2.component.css']
})
export class TransactionForm2Component implements OnInit {

  public showForm: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private transactionService: TransactionService) { }

  public transactionForm: FormGroup;
  model = new Transaction();

  ngOnInit() {
    console.log(environment.myOwnProperty);
    this.transactionForm = this.formBuilder.group(
      {
        name: ['', Validators.minLength(5)],
        type: [''],
        date: [''],
        kind: [''],
        amount: ['']
      });

     this.listenerFormControlValueChanged();

  }

  listenerFormControlValueChanged() {
    this.transactionForm.get('type').valueChanges.subscribe
    (
      (type: string) => {
         console.log(type);
         if (type === 'wydatek') {
           this.transactionForm.get('kind').setValidators([Validators.required]);
         } else {
           this.transactionForm.get('kind').clearValidators();
         }
        this.transactionForm.get('kind').updateValueAndValidity();
      }
    );
  }

  onSubmit(): void {
    console.log('test2');
    this.transactionService.saveTransaction(this.transactionForm);

  }

  myFunc(){
    this.showForm = !this.showForm;
  }
}
