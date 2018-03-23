import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBudgetComponent} from './my-budget.component';
import {NewBudgetPanelComponent} from "./new-budget-panel/new-budget-panel.component";
import { BadgetDetailsComponent } from './badget-details/badget-details.component';
import {MyBudgetRoutingModule} from "./my-budget-routing.module";
import {NewBudgetFormComponent} from "./new-budget-form/new-budget-form.component";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MyBudgetRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyBudgetComponent,
    NewBudgetPanelComponent,
    BadgetDetailsComponent,
    NewBudgetFormComponent
  ]
})
export class MyBudgetModule { }
