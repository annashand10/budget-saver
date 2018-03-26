import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AccountComponent} from "./account/account.component";
import {ReportsComponent} from "./reports/reports.component";
import {AuthGuard} from "./auth-guard/auth-guard";
import {MyBudgetComponent} from "./my-budget/my-budget.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: MyBudgetComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
