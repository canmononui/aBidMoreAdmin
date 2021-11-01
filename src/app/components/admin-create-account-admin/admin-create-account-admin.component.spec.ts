import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateAccountAdminComponent } from './admin-create-account-admin.component';

describe('AdminCreateAccountAdminComponent', () => {
  let component: AdminCreateAccountAdminComponent;
  let fixture: ComponentFixture<AdminCreateAccountAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateAccountAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
