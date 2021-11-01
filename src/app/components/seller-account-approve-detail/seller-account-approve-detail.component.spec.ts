import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAccountApproveDetailComponent } from './seller-account-approve-detail.component';

describe('SellerAccountApproveDetailComponent', () => {
  let component: SellerAccountApproveDetailComponent;
  let fixture: ComponentFixture<SellerAccountApproveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAccountApproveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAccountApproveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
