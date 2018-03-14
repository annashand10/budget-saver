import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBudgetComponent } from './quick-budget.component';

describe('QuickBudgetComponent', () => {
  let component: QuickBudgetComponent;
  let fixture: ComponentFixture<QuickBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
