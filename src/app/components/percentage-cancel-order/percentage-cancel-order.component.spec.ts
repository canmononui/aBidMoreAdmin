import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageCancelOrderComponent } from './percentage-cancel-order.component';

describe('PercentageCancelOrderComponent', () => {
  let component: PercentageCancelOrderComponent;
  let fixture: ComponentFixture<PercentageCancelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageCancelOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageCancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
