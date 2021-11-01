import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninStatusWaitingComponent } from './signin-status-waiting.component';

describe('SigninStatusWaitingComponent', () => {
  let component: SigninStatusWaitingComponent;
  let fixture: ComponentFixture<SigninStatusWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninStatusWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninStatusWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
