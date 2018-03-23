import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBudgetComponent} from './my-budget.component';
import {NewBudgetPanelComponent} from "./new-budget-panel/new-budget-panel.component";
import { BadgetDetailsComponent } from './badget-details/badget-details.component';
import {MyBudgetRoutingModule} from "./my-budget-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MyBudgetRoutingModule
  ],
  declarations: [
    MyBudgetComponent,
    NewBudgetPanelComponent,
    BadgetDetailsComponent
  ]
})
export class MyBudgetModule { }
