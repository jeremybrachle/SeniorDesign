import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsModalPage } from './accommodations-modal.page';

describe('AccommodationsModalPage', () => {
  let component: AccommodationsModalPage;
  let fixture: ComponentFixture<AccommodationsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
