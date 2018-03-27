import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-budget-panel',
  templateUrl: './new-budget-panel.component.html',
  styleUrls: ['./new-budget-panel.component.css']
})
export class NewBudgetPanelComponent implements OnInit {

  newButtonLabel = "Create new budget!";
  buttons: any[] = [
    {
      "label": "Douglas  Pace"
    },
    {
      "label": "Mcleod  Mueller"
    },
    {
      "label": "Day  Meyers"
    },
    {
      "label": "Aguirre  Ellis"
    },
    {
      "label": "Cook  Tyson"
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toogleShowNewFrom() {
    this.router.navigate(['/new-budget-form']);
  }
}
