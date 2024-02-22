import { TestBed } from '@angular/core/testing';

import { ManageCompetencesService } from './manage-competences.service';

describe('ManageCompetencesService', () => {
  let service: ManageCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
