import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyBudgetComponent} from "./my-budget.component";
import {BadgetDetailsComponent} from "./badget-details/badget-details.component";
import {NewBudgetPanelComponent} from "./new-budget-panel/new-budget-panel.component";
import {NewBudgetFormComponent} from "./new-budget-form/new-budget-form.component";

const routes: Routes = [
  { path: 'my-budget',  component: MyBudgetComponent},
  // { path: 'new-budget-form', component: NewBudgetFormComponent},
  { path: 'my-budget/:id', component: BadgetDetailsComponent},
  { path: 'new-budget-panel', component: NewBudgetPanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBudgetRoutingModule { }
