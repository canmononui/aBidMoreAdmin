import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductSendbackWrongListComponent } from './return-product-sendback-wrong-list.component';

describe('ReturnProductSendbackWrongListComponent', () => {
  let component: ReturnProductSendbackWrongListComponent;
  let fixture: ComponentFixture<ReturnProductSendbackWrongListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnProductSendbackWrongListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductSendbackWrongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
