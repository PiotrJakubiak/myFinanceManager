import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionForm2Component } from './transaction-form2.component';

describe('TransactionForm2Component', () => {
  let component: TransactionForm2Component;
  let fixture: ComponentFixture<TransactionForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
