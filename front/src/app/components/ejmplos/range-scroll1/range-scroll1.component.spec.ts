import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeScroll1Component } from './range-scroll1.component';

describe('RangeScroll1Component', () => {
  let component: RangeScroll1Component;
  let fixture: ComponentFixture<RangeScroll1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeScroll1Component]
    });
    fixture = TestBed.createComponent(RangeScroll1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
