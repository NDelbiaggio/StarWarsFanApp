import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PlanetsTableComponent } from './planets-table.component';

describe('PlanetsTableComponent', () => {
  let component: PlanetsTableComponent;
  let fixture: ComponentFixture<PlanetsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
