import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeallerDetailsFormComponent } from './appealler-details-form.component';

describe('AppeallerDetailsFormComponent', () => {
  let component: AppeallerDetailsFormComponent;
  let fixture: ComponentFixture<AppeallerDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppeallerDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppeallerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
