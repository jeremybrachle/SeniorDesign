import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowModalPage } from './book-now-modal.page';

describe('BookNowModalPage', () => {
  let component: BookNowModalPage;
  let fixture: ComponentFixture<BookNowModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
