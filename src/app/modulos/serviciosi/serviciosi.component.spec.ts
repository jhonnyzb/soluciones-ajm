import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosiComponent } from './serviciosi.component';

describe('ServiciosiComponent', () => {
  let component: ServiciosiComponent;
  let fixture: ComponentFixture<ServiciosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
