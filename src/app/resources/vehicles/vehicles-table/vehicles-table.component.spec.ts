import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { VehiclesTableComponent } from './vehicles-table.component';

describe('VehiclesTableComponent', () => {
  let component: VehiclesTableComponent;
  let fixture: ComponentFixture<VehiclesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
