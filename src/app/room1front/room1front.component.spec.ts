import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1frontComponent } from './room1front.component';

describe('Room1frontComponent', () => {
  let component: Room1frontComponent;
  let fixture: ComponentFixture<Room1frontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room1frontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1frontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
