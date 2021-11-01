import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductAdminDetailComponent } from './report-product-admin-detail.component';

describe('ReportProductAdminDetailComponent', () => {
  let component: ReportProductAdminDetailComponent;
  let fixture: ComponentFixture<ReportProductAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductAdminDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
