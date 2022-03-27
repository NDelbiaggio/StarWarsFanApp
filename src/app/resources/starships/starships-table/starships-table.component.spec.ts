import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { StarshipsTableComponent } from './starships-table.component';

describe('StarshipsTableComponent', () => {
  let component: StarshipsTableComponent;
  let fixture: ComponentFixture<StarshipsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
