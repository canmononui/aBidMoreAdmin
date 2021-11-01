import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBuyyerListComponent } from './condition-buyyer-list.component';

describe('ConditionBuyyerListComponent', () => {
  let component: ConditionBuyyerListComponent;
  let fixture: ComponentFixture<ConditionBuyyerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBuyyerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionBuyyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
