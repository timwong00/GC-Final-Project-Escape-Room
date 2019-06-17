import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2rightComponent } from './room2right.component';

describe('Room2rightComponent', () => {
  let component: Room2rightComponent;
  let fixture: ComponentFixture<Room2rightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room2rightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2rightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
