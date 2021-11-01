import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoHistoryListComponent } from './vdo-history-list.component';

describe('VdoHistoryListComponent', () => {
  let component: VdoHistoryListComponent;
  let fixture: ComponentFixture<VdoHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
