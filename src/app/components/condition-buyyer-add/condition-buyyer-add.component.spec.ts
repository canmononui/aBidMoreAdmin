import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBuyyerAddComponent } from './condition-buyyer-add.component';

describe('ConditionBuyyerAddComponent', () => {
  let component: ConditionBuyyerAddComponent;
  let fixture: ComponentFixture<ConditionBuyyerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBuyyerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionBuyyerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
