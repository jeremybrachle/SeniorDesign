import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesModalPage } from './experiences-modal.page';

describe('ExperiencesModalPage', () => {
  let component: ExperiencesModalPage;
  let fixture: ComponentFixture<ExperiencesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
