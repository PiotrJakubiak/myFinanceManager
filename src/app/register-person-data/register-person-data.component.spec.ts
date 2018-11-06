import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonDataComponent } from './register-person-data.component';

describe('RegisterPersonDataComponent', () => {
  let component: RegisterPersonDataComponent;
  let fixture: ComponentFixture<RegisterPersonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPersonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
