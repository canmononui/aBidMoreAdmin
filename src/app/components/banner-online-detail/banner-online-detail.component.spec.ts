import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOnlineDetailComponent } from './banner-online-detail.component';

describe('BannerOnlineDetailComponent', () => {
  let component: BannerOnlineDetailComponent;
  let fixture: ComponentFixture<BannerOnlineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerOnlineDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerOnlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
