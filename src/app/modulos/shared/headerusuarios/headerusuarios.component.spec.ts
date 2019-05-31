import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderusuariosComponent } from './headerusuarios.component';

describe('HeaderusuariosComponent', () => {
  let component: HeaderusuariosComponent;
  let fixture: ComponentFixture<HeaderusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
