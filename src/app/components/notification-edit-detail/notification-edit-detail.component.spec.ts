import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationEditDetailComponent } from './notification-edit-detail.component';

describe('NotificationEditDetailComponent', () => {
  let component: NotificationEditDetailComponent;
  let fixture: ComponentFixture<NotificationEditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationEditDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
