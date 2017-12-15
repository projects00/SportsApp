import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashComponent } from './admindash.component';

describe('AdmindashComponent', () => {
  let component: AdmindashComponent;
  let fixture: ComponentFixture<AdmindashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
