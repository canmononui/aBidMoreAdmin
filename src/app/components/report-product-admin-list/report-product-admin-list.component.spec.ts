import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductAdminListComponent } from './report-product-admin-list.component';

describe('ReportProductAdminListComponent', () => {
  let component: ReportProductAdminListComponent;
  let fixture: ComponentFixture<ReportProductAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProductAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
