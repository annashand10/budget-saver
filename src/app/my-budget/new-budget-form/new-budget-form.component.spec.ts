import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBudgetFormComponent } from './new-budget-form.component';

describe('NewBudgetFormComponent', () => {
  let component: NewBudgetFormComponent;
  let fixture: ComponentFixture<NewBudgetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBudgetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBudgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
