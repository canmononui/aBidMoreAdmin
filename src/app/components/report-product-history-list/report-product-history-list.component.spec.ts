import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductHistoryListComponent } from './report-product-history-list.component';

describe('ReportProductHistoryListComponent', () => {
  let component: ReportProductHistoryListComponent;
  let fixture: ComponentFixture<ReportProductHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
