import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiassingleComponent } from './noticiassingle.component';

describe('NoticiassingleComponent', () => {
  let component: NoticiassingleComponent;
  let fixture: ComponentFixture<NoticiassingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiassingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiassingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
