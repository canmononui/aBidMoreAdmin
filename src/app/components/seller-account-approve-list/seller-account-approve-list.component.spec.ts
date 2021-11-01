import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAccountApproveListComponent } from './seller-account-approve-list.component';

describe('SellerAccountApproveListComponent', () => {
  let component: SellerAccountApproveListComponent;
  let fixture: ComponentFixture<SellerAccountApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAccountApproveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAccountApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
