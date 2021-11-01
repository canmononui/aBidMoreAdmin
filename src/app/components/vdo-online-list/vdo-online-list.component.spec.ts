import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoOnlineListComponent } from './vdo-online-list.component';

describe('VdoOnlineListComponent', () => {
  let component: VdoOnlineListComponent;
  let fixture: ComponentFixture<VdoOnlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoOnlineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoOnlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
