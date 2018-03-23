import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AccountModule} from './account/account.module';
import {AuthModule} from './auth/auth.module';
import {MyBudgetModule} from './my-budget/my-budget.module';
import {ReportsModule} from './reports/reports.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material/material.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AccountModule,
    AuthModule,
    MyBudgetModule,
    ReportsModule,
    AppRoutingRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
