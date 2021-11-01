import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBankApproveDetailComponent } from './seller-bank-approve-detail.component';

describe('SellerBankApproveDetailComponent', () => {
  let component: SellerBankApproveDetailComponent;
  let fixture: ComponentFixture<SellerBankApproveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerBankApproveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBankApproveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
