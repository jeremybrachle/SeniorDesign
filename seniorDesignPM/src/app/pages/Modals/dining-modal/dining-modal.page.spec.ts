import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningModalPage } from './dining-modal.page';

describe('DiningModalPage', () => {
  let component: DiningModalPage;
  let fixture: ComponentFixture<DiningModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
