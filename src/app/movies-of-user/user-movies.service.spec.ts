import { TestBed } from '@angular/core/testing';

import { UserMoviesService } from './user-movies.service';

describe('UserMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMoviesService = TestBed.get(UserMoviesService);
    expect(service).toBeTruthy();
  });
});
