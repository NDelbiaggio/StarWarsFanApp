import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { HeaderListComponent } from './header-list.component';

describe('HeaderListComponent', () => {
  let component: HeaderListComponent;
  let fixture: ComponentFixture<HeaderListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
