import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room3leftComponent } from './room3left.component';

describe('Room3leftComponent', () => {
  let component: Room3leftComponent;
  let fixture: ComponentFixture<Room3leftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room3leftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room3leftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
