import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompetencesComponent } from './create-competences.component';

describe('CreateCompetencesComponent', () => {
  let component: CreateCompetencesComponent;
  let fixture: ComponentFixture<CreateCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompetencesComponent]
    });
    fixture = TestBed.createComponent(CreateCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
