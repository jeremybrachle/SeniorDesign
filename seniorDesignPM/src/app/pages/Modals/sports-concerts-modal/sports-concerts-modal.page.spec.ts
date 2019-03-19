import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsConcertsModalPage } from './sports-concerts-modal.page';

describe('SportsConcertsModalPage', () => {
  let component: SportsConcertsModalPage;
  let fixture: ComponentFixture<SportsConcertsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsConcertsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsConcertsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
