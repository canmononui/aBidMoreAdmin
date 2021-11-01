import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyyerAccountListComponent } from './buyyer-account-list.component';

describe('BuyyerAccountListComponent', () => {
  let component: BuyyerAccountListComponent;
  let fixture: ComponentFixture<BuyyerAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyyerAccountListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyyerAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
