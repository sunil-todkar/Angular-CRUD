import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientComponent } from './our-client.component';

describe('OurClientComponent', () => {
  let component: OurClientComponent;
  let fixture: ComponentFixture<OurClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
