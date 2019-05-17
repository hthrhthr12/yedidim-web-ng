import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeallerDetailsComponent } from './appealler-details.component';

describe('AppeallerDetailsComponent', () => {
  let component: AppeallerDetailsComponent;
  let fixture: ComponentFixture<AppeallerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppeallerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppeallerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
