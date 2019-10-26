import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubChildComponent } from './view-sub-child.component';

describe('ViewSubChildComponent', () => {
  let component: ViewSubChildComponent;
  let fixture: ComponentFixture<ViewSubChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
