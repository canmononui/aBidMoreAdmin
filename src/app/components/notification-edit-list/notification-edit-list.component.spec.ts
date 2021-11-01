import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationEditListComponent } from './notification-edit-list.component';

describe('NotificationEditListComponent', () => {
  let component: NotificationEditListComponent;
  let fixture: ComponentFixture<NotificationEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
