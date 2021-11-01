import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductSendbackWrongDetailComponent } from './return-product-sendback-wrong-detail.component';

describe('ReturnProductSendbackWrongDetailComponent', () => {
  let component: ReturnProductSendbackWrongDetailComponent;
  let fixture: ComponentFixture<ReturnProductSendbackWrongDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnProductSendbackWrongDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductSendbackWrongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
