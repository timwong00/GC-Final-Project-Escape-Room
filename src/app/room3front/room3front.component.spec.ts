import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room3frontComponent } from './room3front.component';

describe('Room3frontComponent', () => {
  let component: Room3frontComponent;
  let fixture: ComponentFixture<Room3frontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room3frontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room3frontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
