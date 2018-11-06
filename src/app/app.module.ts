import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TransactionService} from './service/transaction.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomCurrencyPipe } from './util/custom-currency.pipe';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';
import { ErrorMessageComponent } from './component/error-message/error-message.component';
import {ValidationService} from './service/validation/validation.service';
import {ChartsModule} from 'ng2-charts';
import { BalanceAccountChartComponent } from './component/balance-account-chart/balance-account-chart.component';
import {ChartService} from './service/chart/chart.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './component/login/login.component';
import {AuthenticationService} from './service/authentication.service';
import { TransactionComponent } from './component/transaction/transaction.component';
import { RegisterComponent } from './register/register.component';
import {FormWizardModule} from 'angular2-wizard/dist';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterWizardComponent } from './register-wizard/register-wizard.component';
import { RegisterPersonDataComponent } from './register-person-data/register-person-data.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { RegisterNavStepsComponent } from './register-nav-steps/register-nav-steps.component';
import { RegisterFinishComponent } from './register-finish/register-finish.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {UserService} from './service/user.service';
import {AuthGuard} from './guard/AuthGuard';
import {HttpHeaderInterceptor} from './interceptor/HttpHeaderInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    CustomCurrencyPipe,
    TransactionFormComponent,
    ErrorMessageComponent,
    BalanceAccountChartComponent,
    LoginComponent,
    TransactionComponent,
    RegisterComponent,
    RegisterWizardComponent,
    RegisterPersonDataComponent,
    RegisterAddressComponent,
    RegisterConfirmComponent,
    RegisterNavStepsComponent,
    RegisterFinishComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AppRoutingModule,
    FormWizardModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [
    TransactionService,
    ValidationService,
    ChartService,
    AuthenticationService,
    UserService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
