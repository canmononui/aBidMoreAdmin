import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveAccountAccessComponent } from './admin-approve-account-access.component';

describe('AdminApproveAccountAccessComponent', () => {
  let component: AdminApproveAccountAccessComponent;
  let fixture: ComponentFixture<AdminApproveAccountAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveAccountAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveAccountAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
