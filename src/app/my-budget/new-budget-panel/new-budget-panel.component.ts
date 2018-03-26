import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-budget-panel',
  templateUrl: './new-budget-panel.component.html',
  styleUrls: ['./new-budget-panel.component.css']
})
export class NewBudgetPanelComponent implements OnInit {

  newButtonLabel = "Create new budget!";
  newForm = false;
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
  constructor() { }

  ngOnInit() {
  }

  toogleShowNewFrom() {
    this.newForm = true;
  }
}
