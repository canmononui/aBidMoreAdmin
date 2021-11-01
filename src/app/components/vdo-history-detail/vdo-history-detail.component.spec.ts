import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoHistoryDetailComponent } from './vdo-history-detail.component';

describe('VdoHistoryDetailComponent', () => {
  let component: VdoHistoryDetailComponent;
  let fixture: ComponentFixture<VdoHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
