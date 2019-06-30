import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSliderComponent } from './delete-slider.component';

describe('DeleteSliderComponent', () => {
  let component: DeleteSliderComponent;
  let fixture: ComponentFixture<DeleteSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
