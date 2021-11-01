import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAbidmoreGobalComponent } from './seller-abidmore-gobal.component';

describe('SellerAbidmoreGobalComponent', () => {
  let component: SellerAbidmoreGobalComponent;
  let fixture: ComponentFixture<SellerAbidmoreGobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAbidmoreGobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAbidmoreGobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
