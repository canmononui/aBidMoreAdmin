import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountAdminDetailComponent } from './admin-account-admin-detail.component';

describe('AdminAccountAdminDetailComponent', () => {
  let component: AdminAccountAdminDetailComponent;
  let fixture: ComponentFixture<AdminAccountAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountAdminDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
