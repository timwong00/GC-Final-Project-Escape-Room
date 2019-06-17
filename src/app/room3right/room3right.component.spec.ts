import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room3rightComponent } from './room3right.component';

describe('Room3rightComponent', () => {
  let component: Room3rightComponent;
  let fixture: ComponentFixture<Room3rightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room3rightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room3rightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
