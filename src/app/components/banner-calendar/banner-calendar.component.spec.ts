import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCalendarComponent } from './banner-calendar.component';

describe('BannerCalendarComponent', () => {
  let component: BannerCalendarComponent;
  let fixture: ComponentFixture<BannerCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
