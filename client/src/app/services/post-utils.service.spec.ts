import { TestBed } from '@angular/core/testing';

import { PostUtilsService } from './post-utils.service';

describe('PostUtilsService', () => {
  let service: PostUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
