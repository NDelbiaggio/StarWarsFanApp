import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardView } from './card-view.component';

describe('PeopleCardsComponent', () => {
  let component: CardView;
  let fixture: ComponentFixture<CardView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
