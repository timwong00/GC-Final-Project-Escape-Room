import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1rightComponent } from './room1right.component';

describe('Room1rightComponent', () => {
  let component: Room1rightComponent;
  let fixture: ComponentFixture<Room1rightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room1rightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1rightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
