import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSellerDetailComponent } from './condition-seller-detail.component';

describe('ConditionSellerDetailComponent', () => {
  let component: ConditionSellerDetailComponent;
  let fixture: ComponentFixture<ConditionSellerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionSellerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
