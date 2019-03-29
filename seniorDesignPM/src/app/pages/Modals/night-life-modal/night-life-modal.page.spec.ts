import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightLifeModalPage } from './night-life-modal.page';

describe('NightLifeModalPage', () => {
  let component: NightLifeModalPage;
  let fixture: ComponentFixture<NightLifeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightLifeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightLifeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
