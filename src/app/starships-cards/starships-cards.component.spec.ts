import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsCardsComponent } from './starships-cards.component';

describe('StarshipsCardsComponent', () => {
  let component: StarshipsCardsComponent;
  let fixture: ComponentFixture<StarshipsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
