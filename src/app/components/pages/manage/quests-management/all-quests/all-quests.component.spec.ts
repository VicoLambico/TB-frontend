import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestsComponent } from './all-quests.component';

describe('AllQuestsComponent', () => {
  let component: AllQuestsComponent;
  let fixture: ComponentFixture<AllQuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuestsComponent]
    });
    fixture = TestBed.createComponent(AllQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
