import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBuyyerMessageComponent } from './chat-buyyer-message.component';

describe('ChatBuyyerMessageComponent', () => {
  let component: ChatBuyyerMessageComponent;
  let fixture: ComponentFixture<ChatBuyyerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBuyyerMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBuyyerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
