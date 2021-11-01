import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSettimeComponent } from './member-settime.component';

describe('MemberSettimeComponent', () => {
  let component: MemberSettimeComponent;
  let fixture: ComponentFixture<MemberSettimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSettimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSettimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
