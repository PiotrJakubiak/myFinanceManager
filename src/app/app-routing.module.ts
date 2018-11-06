import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent} from './component/transaction-list/transaction-list.component';
import {LoginComponent} from './component/login/login.component';
import {TransactionComponent} from './component/transaction/transaction.component';
import {RegisterWizardComponent} from './register-wizard/register-wizard.component';
import {AuthGuard} from './guard/AuthGuard';

const routes: Routes = [
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TransactionListComponent
      },
      {
        path: ':id',
        component: TransactionComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterWizardComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
