import { TestBed } from '@angular/core/testing';

import { CallStateService } from './call-state.service';

describe('CallStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallStateService = TestBed.get(CallStateService);
    expect(service).toBeTruthy();
  });
});
