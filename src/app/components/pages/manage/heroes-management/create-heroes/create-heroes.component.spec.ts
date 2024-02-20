import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroesComponent } from './create-heroes.component';

describe('CreateHeroesComponent', () => {
  let component: CreateHeroesComponent;
  let fixture: ComponentFixture<CreateHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHeroesComponent]
    });
    fixture = TestBed.createComponent(CreateHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
