import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1leftComponent } from './room1left.component';

describe('Room1leftComponent', () => {
  let component: Room1leftComponent;
  let fixture: ComponentFixture<Room1leftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room1leftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1leftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
