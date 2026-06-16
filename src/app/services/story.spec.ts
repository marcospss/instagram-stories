import { TestBed } from '@angular/core/testing';

import { StoryService } from './story';
import { localStorageMock } from '@mocks/localStorage.mock';

describe('StoryService', () => {
  localStorageMock();
  let service: StoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
