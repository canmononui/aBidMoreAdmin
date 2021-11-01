import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSellerListComponent } from './chat-seller-list.component';

describe('ChatSellerListComponent', () => {
  let component: ChatSellerListComponent;
  let fixture: ComponentFixture<ChatSellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSellerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
