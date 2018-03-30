import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerListActionsComponent } from './timer-list-actions.component';

describe('TimerListActionsComponent', () => {
  let component: TimerListActionsComponent;
  let fixture: ComponentFixture<TimerListActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerListActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
