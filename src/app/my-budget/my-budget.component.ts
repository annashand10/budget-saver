import {Component, OnInit} from '@angular/core';
import {BudgetService} from "../services/budget.service";

@Component({
  selector: 'app-my-budget',
  templateUrl: './my-budget.component.html',
  styleUrls: ['./my-budget.component.css']
})
export class MyBudgetComponent implements OnInit {
  categories: any;
  budgetLabel: string;

  constructor(private _budgetService: BudgetService) {
  }

  ngOnInit() {
    this.getCategoriesList();
    this.betBudget();
    console.log("MyBudgetComponent ");
  }

  private getCategoriesList() {
    this._budgetService.getCategories()
      .subscribe(data => {
        console.log(data);
        this.categories = data;
        },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  private betBudget() {
    this._budgetService.getBudgets()
      .subscribe(data => {
          console.log(data);
          this.budgetLabel = data[0].label;
        },
        err => console.error(err),
        () => console.log('done loading foods')
      );
  }
}
