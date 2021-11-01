import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageShopComponent } from './percentage-shop.component';

describe('PercentageShopComponent', () => {
  let component: PercentageShopComponent;
  let fixture: ComponentFixture<PercentageShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
