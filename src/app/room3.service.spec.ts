import { TestBed } from '@angular/core/testing';

import { Room3Service } from './room3.service';

describe('Room3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Room3Service = TestBed.get(Room3Service);
    expect(service).toBeTruthy();
  });
});
