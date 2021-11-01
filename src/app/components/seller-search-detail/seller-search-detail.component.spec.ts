import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSearchDetailComponent } from './seller-search-detail.component';

describe('SellerSearchDetailComponent', () => {
  let component: SellerSearchDetailComponent;
  let fixture: ComponentFixture<SellerSearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSearchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
