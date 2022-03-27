import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SpeciesCardsComponent } from './species-cards.component';

describe('SpeciesCardsComponent', () => {
  let component: SpeciesCardsComponent;
  let fixture: ComponentFixture<SpeciesCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
