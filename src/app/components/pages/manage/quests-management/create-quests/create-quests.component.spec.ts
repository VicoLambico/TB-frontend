import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestsComponent } from './create-quests.component';

describe('CreateQuestsComponent', () => {
  let component: CreateQuestsComponent;
  let fixture: ComponentFixture<CreateQuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestsComponent]
    });
    fixture = TestBed.createComponent(CreateQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
