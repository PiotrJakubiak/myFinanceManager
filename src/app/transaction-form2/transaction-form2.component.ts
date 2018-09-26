import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form2',
  templateUrl: './transaction-form2.component.html',
  styleUrls: ['./transaction-form2.component.css']
})
export class TransactionForm2Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  transactionForm = this.formBuilder.group({
    name: ['', Validators.required],
    type: [''],
    kind: [''],
    amount: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.transactionForm.value);
  }
}
