import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductHistoryDetailComponent } from './report-product-history-detail.component';

describe('ReportProductHistoryDetailComponent', () => {
  let component: ReportProductHistoryDetailComponent;
  let fixture: ComponentFixture<ReportProductHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
