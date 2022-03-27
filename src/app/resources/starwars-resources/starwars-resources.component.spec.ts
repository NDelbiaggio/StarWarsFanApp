import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { StarwarsResourcesComponent } from './starwars-resources.component';

describe('StarwarsResourcesComponent', () => {
  let component: StarwarsResourcesComponent;
  let fixture: ComponentFixture<StarwarsResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
