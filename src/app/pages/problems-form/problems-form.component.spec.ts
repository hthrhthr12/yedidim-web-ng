import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsFormComponent } from './problems-form.component';

describe('ProblemsFormComponent', () => {
  let component: ProblemsFormComponent;
  let fixture: ComponentFixture<ProblemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
