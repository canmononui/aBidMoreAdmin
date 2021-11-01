import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSellerAddComponent } from './condition-seller-add.component';

describe('ConditionSellerAddComponent', () => {
  let component: ConditionSellerAddComponent;
  let fixture: ComponentFixture<ConditionSellerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionSellerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSellerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
