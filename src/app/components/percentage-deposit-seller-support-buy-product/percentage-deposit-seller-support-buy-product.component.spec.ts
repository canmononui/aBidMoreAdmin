import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageDepositSellerSupportBuyProductComponent } from './percentage-deposit-seller-support-buy-product.component';

describe('PercentageDepositSellerSupportBuyProductComponent', () => {
  let component: PercentageDepositSellerSupportBuyProductComponent;
  let fixture: ComponentFixture<PercentageDepositSellerSupportBuyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageDepositSellerSupportBuyProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageDepositSellerSupportBuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
