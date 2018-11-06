import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNavStepsComponent } from './register-nav-steps.component';

describe('RegisterNavStepsComponent', () => {
  let component: RegisterNavStepsComponent;
  let fixture: ComponentFixture<RegisterNavStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNavStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNavStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
