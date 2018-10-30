import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesCardsComponent } from './vehicles-cards.component';

describe('VehiclesCardsComponent', () => {
  let component: VehiclesCardsComponent;
  let fixture: ComponentFixture<VehiclesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
