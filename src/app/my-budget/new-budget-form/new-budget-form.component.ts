import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-budget-form',
  templateUrl: './new-budget-form.component.html',
  styleUrls: ['./new-budget-form.component.css']
})
export class NewBudgetFormComponent implements OnInit {
  options: FormGroup;
  @Input() showNewForm: boolean;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    console.log("new form");
  }
}
