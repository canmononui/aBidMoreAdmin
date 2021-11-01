import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductRespondMoreSevenDaysDetailComponent } from './return-product-respond-more-seven-days-detail.component';

describe('ReturnProductRespondMoreSevenDaysDetailComponent', () => {
  let component: ReturnProductRespondMoreSevenDaysDetailComponent;
  let fixture: ComponentFixture<ReturnProductRespondMoreSevenDaysDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnProductRespondMoreSevenDaysDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductRespondMoreSevenDaysDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
