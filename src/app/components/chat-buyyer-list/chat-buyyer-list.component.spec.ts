import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBuyyerListComponent } from './chat-buyyer-list.component';

describe('ChatBuyyerListComponent', () => {
  let component: ChatBuyyerListComponent;
  let fixture: ComponentFixture<ChatBuyyerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBuyyerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBuyyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
