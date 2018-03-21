import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {AccountModule} from './account/account.module';
import {AuthModule} from './auth/auth.module';
import {LayoutModule} from './layout/layout.module';
import {MyBudgetModule} from './my-budget/my-budget.module';
import {ReportsModule} from './reports/reports.module';

@NgModule({
  imports: [
    HeaderModule,
    BrowserModule,
    AccountModule,
    AuthModule,
    LayoutModule,
    MyBudgetModule,
    ReportsModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
