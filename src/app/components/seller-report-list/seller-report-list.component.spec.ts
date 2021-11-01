import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerReportListComponent } from './seller-report-list.component';

describe('SellerReportListComponent', () => {
  let component: SellerReportListComponent;
  let fixture: ComponentFixture<SellerReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
