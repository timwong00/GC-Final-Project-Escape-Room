import { TestBed } from '@angular/core/testing';

import { SoundeffectService } from './soundeffect.service';

describe('SoundeffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoundeffectService = TestBed.get(SoundeffectService);
    expect(service).toBeTruthy();
  });
});
