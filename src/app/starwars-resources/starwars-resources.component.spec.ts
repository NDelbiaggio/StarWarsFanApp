import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsResourcesComponent } from './starwars-resources.component';

describe('StarwarsResourcesComponent', () => {
  let component: StarwarsResourcesComponent;
  let fixture: ComponentFixture<StarwarsResourcesComponent>;

  beforeEach(async(() => {
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
