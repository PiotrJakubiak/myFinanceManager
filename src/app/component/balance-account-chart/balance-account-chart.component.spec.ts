import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAccountChartComponent } from './balance-account-chart.component';

describe('BalanceAccountChartComponent', () => {
  let component: BalanceAccountChartComponent;
  let fixture: ComponentFixture<BalanceAccountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceAccountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAccountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
