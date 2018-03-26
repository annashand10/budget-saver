import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-budget',
  templateUrl: './my-budget.component.html',
  styleUrls: ['./my-budget.component.css']
})
export class MyBudgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("MyBudgetComponent ");
  }
}
