import { TestBed } from '@angular/core/testing';

import { ManageHeroesService } from './manage-heroes.service';

describe('ManageHeroesService', () => {
  let service: ManageHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
