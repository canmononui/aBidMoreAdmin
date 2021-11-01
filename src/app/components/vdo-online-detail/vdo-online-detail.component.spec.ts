import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoOnlineDetailComponent } from './vdo-online-detail.component';

describe('VdoOnlineDetailComponent', () => {
  let component: VdoOnlineDetailComponent;
  let fixture: ComponentFixture<VdoOnlineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoOnlineDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoOnlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
