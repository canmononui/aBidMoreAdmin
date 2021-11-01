import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOnlineListComponent } from './banner-online-list.component';

describe('BannerOnlineListComponent', () => {
  let component: BannerOnlineListComponent;
  let fixture: ComponentFixture<BannerOnlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerOnlineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerOnlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
