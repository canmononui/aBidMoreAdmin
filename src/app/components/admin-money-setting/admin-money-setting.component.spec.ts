import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoneySettingComponent } from './admin-money-setting.component';

describe('AdminMoneySettingComponent', () => {
  let component: AdminMoneySettingComponent;
  let fixture: ComponentFixture<AdminMoneySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMoneySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoneySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
