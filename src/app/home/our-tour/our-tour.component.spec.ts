import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTourComponent } from './our-tour.component';

describe('OurTourComponent', () => {
  let component: OurTourComponent;
  let fixture: ComponentFixture<OurTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
