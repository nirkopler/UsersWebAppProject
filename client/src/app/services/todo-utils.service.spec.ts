import { TestBed } from '@angular/core/testing';

import { TodoUtilsService } from './todo-utils.service';

describe('TodoUtilsService', () => {
  let service: TodoUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
