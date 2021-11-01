import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberStatisticsChartComponent } from './member-statistics-chart.component';

describe('MemberStatisticsChartComponent', () => {
  let component: MemberStatisticsChartComponent;
  let fixture: ComponentFixture<MemberStatisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberStatisticsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
