import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import { UiComponentsComponent } from './components/ui-components.component';
import { QuickBudgetComponent } from './my-budget/quick-budget/quick-budget.component';
import { SavingsComponent } from './my-budget/savings/savings.component';
import { TotalSalaryComponent } from './my-budget/total-salary/total-salary.component';
import { TableComponent } from './components/table/table.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MyBudgetComponent } from './my-budget/my-budget.component';
import { AccountComponent } from './account/account.component';
import { ReportsComponent } from './reports/reports.component';
import { ServicesComponent } from './services/services.component';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { NewBudgetPanelComponent } from './new-budget-panel/new-budget-panel.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderModule,
    UiComponentsComponent,
    QuickBudgetComponent,
    SavingsComponent,
    TotalSalaryComponent,
    TableComponent,
    TooltipComponent,
    MyBudgetComponent,
    AccountComponent,
    ReportsComponent,
    ServicesComponent,
    AuthComponent,
    LayoutComponent,
    NewBudgetPanelComponent,
    CalendarComponent,
    DropdownComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
