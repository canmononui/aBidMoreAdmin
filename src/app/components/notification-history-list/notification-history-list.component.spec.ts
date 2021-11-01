import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHistoryListComponent } from './notification-history-list.component';

describe('NotificationHistoryListComponent', () => {
  let component: NotificationHistoryListComponent;
  let fixture: ComponentFixture<NotificationHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
