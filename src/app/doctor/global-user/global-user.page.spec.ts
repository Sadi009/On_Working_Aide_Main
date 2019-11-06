import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalUserPage } from './global-user.page';

describe('GlobalUserPage', () => {
  let component: GlobalUserPage;
  let fixture: ComponentFixture<GlobalUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
