import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUserPage } from './local-user.page';

describe('LocalUserPage', () => {
  let component: LocalUserPage;
  let fixture: ComponentFixture<LocalUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
