import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {AccountModule} from "./account/account.module";
import {MyBudgetModule} from "./my-budget/my-budget.module";
import {ReportsModule} from "./reports/reports.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {AppRoutingRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material/material.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthGuard} from "./auth-guard/auth-guard";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, HttpModule} from "@angular/http";
import {AuthenticationService} from "./services/auth.service";
import {LoginComponent} from "./login/login.component";
import {fakeBackendProvider} from "./helpers/fake-backend";
import {TableModule} from "./components/table/table.module";
import {DatepickerModule} from "./components/datepicker/datepicker.module";
import {BudgetService} from "./services/budget.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    AccountModule,
    MyBudgetModule,
    ReportsModule,
    AppRoutingRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TableModule,
    DatepickerModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    BudgetService,
    // UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
