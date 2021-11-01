import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountAdminListComponent } from './admin-account-admin-list.component';

describe('AdminAccountAdminListComponent', () => {
  let component: AdminAccountAdminListComponent;
  let fixture: ComponentFixture<AdminAccountAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
