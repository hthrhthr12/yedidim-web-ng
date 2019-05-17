import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallFinishedComponent } from './call-finished.component';

describe('CallFinishedComponent', () => {
  let component: CallFinishedComponent;
  let fixture: ComponentFixture<CallFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
