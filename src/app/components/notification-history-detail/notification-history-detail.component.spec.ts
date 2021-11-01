import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHistoryDetailComponent } from './notification-history-detail.component';

describe('NotificationHistoryDetailComponent', () => {
  let component: NotificationHistoryDetailComponent;
  let fixture: ComponentFixture<NotificationHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
