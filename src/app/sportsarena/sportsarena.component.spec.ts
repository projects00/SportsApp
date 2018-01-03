import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsarenaComponent } from './sportsarena.component';

describe('SportsarenaComponent', () => {
  let component: SportsarenaComponent;
  let fixture: ComponentFixture<SportsarenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsarenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsarenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
