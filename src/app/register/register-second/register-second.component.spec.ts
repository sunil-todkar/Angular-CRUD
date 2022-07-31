import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSecondComponent } from './register-second.component';

describe('RegisterSecondComponent', () => {
  let component: RegisterSecondComponent;
  let fixture: ComponentFixture<RegisterSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
