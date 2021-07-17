import { TestBed } from '@angular/core/testing';

import { UserUtilsService } from './user-utils.service';

describe('UserUtilsService', () => {
  let service: UserUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
