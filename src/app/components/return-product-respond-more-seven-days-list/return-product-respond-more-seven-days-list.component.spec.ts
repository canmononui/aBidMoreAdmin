import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductRespondMoreSevenDaysListComponent } from './return-product-respond-more-seven-days-list.component';

describe('ReturnProductRespondMoreSevenDaysListComponent', () => {
  let component: ReturnProductRespondMoreSevenDaysListComponent;
  let fixture: ComponentFixture<ReturnProductRespondMoreSevenDaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnProductRespondMoreSevenDaysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductRespondMoreSevenDaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
