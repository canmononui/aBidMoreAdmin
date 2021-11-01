import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductListComponent } from './return-product-list.component';

describe('ReturnProductListComponent', () => {
  let component: ReturnProductListComponent;
  let fixture: ComponentFixture<ReturnProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
