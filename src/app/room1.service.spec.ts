import { TestBed } from '@angular/core/testing';

import { Room1Service } from './room1.service';

describe('Room1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Room1Service = TestBed.get(Room1Service);
    expect(service).toBeTruthy();
  });
});
