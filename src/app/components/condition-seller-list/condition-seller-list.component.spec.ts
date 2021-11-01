import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSellerListComponent } from './condition-seller-list.component';

describe('ConditionSellerListComponent', () => {
  let component: ConditionSellerListComponent;
  let fixture: ComponentFixture<ConditionSellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionSellerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
