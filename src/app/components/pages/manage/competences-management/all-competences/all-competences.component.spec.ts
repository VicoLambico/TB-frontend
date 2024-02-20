import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompetencesComponent } from './all-competences.component';

describe('AllCompetencesComponent', () => {
  let component: AllCompetencesComponent;
  let fixture: ComponentFixture<AllCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCompetencesComponent]
    });
    fixture = TestBed.createComponent(AllCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
