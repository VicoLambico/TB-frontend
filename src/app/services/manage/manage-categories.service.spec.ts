import { TestBed } from '@angular/core/testing';

import { ManageCategoriesService } from './manage-categories.service';

describe('ManageCategoriesService', () => {
  let service: ManageCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
