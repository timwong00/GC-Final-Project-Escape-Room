import { TestBed } from '@angular/core/testing';

import { TutorialroomService } from './tutorialroom.service';

describe('TutorialroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialroomService = TestBed.get(TutorialroomService);
    expect(service).toBeTruthy();
  });
});
