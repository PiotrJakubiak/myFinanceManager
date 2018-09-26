import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TransactionService} from './transaction.service';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomCurrencyPipe } from './custom-currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionFormComponent,
    CustomCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
