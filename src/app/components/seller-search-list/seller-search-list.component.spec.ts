import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSearchListComponent } from './seller-search-list.component';

describe('SellerSearchListComponent', () => {
  let component: SellerSearchListComponent;
  let fixture: ComponentFixture<SellerSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
