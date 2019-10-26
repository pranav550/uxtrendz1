import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubChild1Component } from './view-sub-child1.component';

describe('ViewSubChild1Component', () => {
  let component: ViewSubChild1Component;
  let fixture: ComponentFixture<ViewSubChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
