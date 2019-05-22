import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioscComponent } from './serviciosc.component';

describe('ServicioscComponent', () => {
  let component: ServicioscComponent;
  let fixture: ComponentFixture<ServicioscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
