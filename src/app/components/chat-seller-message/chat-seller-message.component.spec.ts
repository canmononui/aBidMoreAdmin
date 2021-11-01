import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSellerMessageComponent } from './chat-seller-message.component';

describe('ChatSellerMessageComponent', () => {
  let component: ChatSellerMessageComponent;
  let fixture: ComponentFixture<ChatSellerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSellerMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSellerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
