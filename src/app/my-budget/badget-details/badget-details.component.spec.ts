import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgetDetailsComponent } from './badget-details.component';

describe('BadgetDetailsComponent', () => {
  let component: BadgetDetailsComponent;
  let fixture: ComponentFixture<BadgetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
