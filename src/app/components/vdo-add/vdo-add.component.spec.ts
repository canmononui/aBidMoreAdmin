import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoAddComponent } from './vdo-add.component';

describe('VdoAddComponent', () => {
  let component: VdoAddComponent;
  let fixture: ComponentFixture<VdoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
