import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBudgetPanelComponent } from './new-budget-panel.component';

describe('NewBudgetPanelComponent', () => {
  let component: NewBudgetPanelComponent;
  let fixture: ComponentFixture<NewBudgetPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBudgetPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBudgetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
