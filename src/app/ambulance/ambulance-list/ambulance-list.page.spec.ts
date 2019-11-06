import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceListPage } from './ambulance-list.page';

describe('AmbulanceListPage', () => {
  let component: AmbulanceListPage;
  let fixture: ComponentFixture<AmbulanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
