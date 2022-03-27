import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PeopleCardsComponent } from './people-cards.component';

describe('PeopleCardsComponent', () => {
  let component: PeopleCardsComponent;
  let fixture: ComponentFixture<PeopleCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
