import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AccountComponent} from "./account/account.component";
import {ReportsComponent} from "./reports/reports.component";

const routes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: 'account', component: AccountComponent },
  { path: '',   redirectTo: '/my-budget', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
