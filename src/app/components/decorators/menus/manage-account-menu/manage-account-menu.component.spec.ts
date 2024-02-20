import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountMenuComponent } from './manage-account-menu.component';

describe('ManageAccountMenuComponent', () => {
  let component: ManageAccountMenuComponent;
  let fixture: ComponentFixture<ManageAccountMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAccountMenuComponent]
    });
    fixture = TestBed.createComponent(ManageAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
