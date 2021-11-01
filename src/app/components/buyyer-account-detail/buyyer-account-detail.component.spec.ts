import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyyerAccountDetailComponent } from './buyyer-account-detail.component';

describe('BuyyerAccountDetailComponent', () => {
  let component: BuyyerAccountDetailComponent;
  let fixture: ComponentFixture<BuyyerAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyyerAccountDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyyerAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
