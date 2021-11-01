import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBankApproveListComponent } from './seller-bank-approve-list.component';

describe('SellerBankApproveListComponent', () => {
  let component: SellerBankApproveListComponent;
  let fixture: ComponentFixture<SellerBankApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerBankApproveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBankApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
