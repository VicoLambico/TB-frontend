import { TestBed } from '@angular/core/testing';

import { ManageQuestsService } from './manage-quests.service';

describe('ManageQuestsService', () => {
  let service: ManageQuestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
