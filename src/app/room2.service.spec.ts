import { TestBed } from '@angular/core/testing';

import { Room2Service } from './room2.service';

describe('Room2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Room2Service = TestBed.get(Room2Service);
    expect(service).toBeTruthy();
  });
});
