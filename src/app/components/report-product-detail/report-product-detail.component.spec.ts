import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductDetailComponent } from './report-product-detail.component';

describe('ReportProductDetailComponent', () => {
  let component: ReportProductDetailComponent;
  let fixture: ComponentFixture<ReportProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
