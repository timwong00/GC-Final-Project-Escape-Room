import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2leftComponent } from './room2left.component';

describe('Room2leftComponent', () => {
  let component: Room2leftComponent;
  let fixture: ComponentFixture<Room2leftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room2leftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2leftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
