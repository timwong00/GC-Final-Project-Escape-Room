import { TestBed } from '@angular/core/testing';

import { GameProgressionService } from './game-progression.service';

describe('GameProgressionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameProgressionService = TestBed.get(GameProgressionService);
    expect(service).toBeTruthy();
  });
});
