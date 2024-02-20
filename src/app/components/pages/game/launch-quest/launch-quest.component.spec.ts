import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchQuestComponent } from './launch-quest.component';

describe('LaunchQuestComponent', () => {
  let component: LaunchQuestComponent;
  let fixture: ComponentFixture<LaunchQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchQuestComponent]
    });
    fixture = TestBed.createComponent(LaunchQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
