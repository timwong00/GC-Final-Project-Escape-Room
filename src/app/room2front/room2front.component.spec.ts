import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2frontComponent } from './room2front.component';

describe('Room2frontComponent', () => {
  let component: Room2frontComponent;
  let fixture: ComponentFixture<Room2frontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room2frontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2frontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
