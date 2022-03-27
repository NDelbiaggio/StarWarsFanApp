import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PlanetsCardsComponent } from './planets-cards.component';

describe('PlanetsCardsComponent', () => {
  let component: PlanetsCardsComponent;
  let fixture: ComponentFixture<PlanetsCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
