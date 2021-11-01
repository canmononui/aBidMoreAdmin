import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBuyyerDetailComponent } from './condition-buyyer-detail.component';

describe('ConditionBuyyerDetailComponent', () => {
  let component: ConditionBuyyerDetailComponent;
  let fixture: ComponentFixture<ConditionBuyyerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBuyyerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionBuyyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
