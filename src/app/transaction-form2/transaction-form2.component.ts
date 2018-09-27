import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form2',
  templateUrl: './transaction-form2.component.html',
  styleUrls: ['./transaction-form2.component.css']
})
export class TransactionForm2Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  transactionForm;

  ngOnInit() {

    this.transactionForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        type: [''],
        kind: [''],
        amount: ['']
      });

     this.listenerFormControlValueChanged();

  }

  onSubmit() {
    console.log(this.transactionForm.value);
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
}
