import { TestBed } from '@angular/core/testing';

import { MovieAppApiService } from './movie-app-api.service';

describe('MovieAppApiService', () => {
  let service: MovieAppApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAppApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
