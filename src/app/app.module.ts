import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TransactionService} from './transaction.service';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { TransactionForm2Component } from './transaction-form2/transaction-form2.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {ValidationService} from './validation.service';
import {ChartsModule} from 'ng2-charts';
import { BalanceAccountChartComponent } from './balance-account-chart/balance-account-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionFormComponent,
    CustomCurrencyPipe,
    TransactionForm2Component,
    ErrorMessageComponent,
    BalanceAccountChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [TransactionService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
