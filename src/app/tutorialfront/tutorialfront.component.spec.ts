import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialfrontComponent } from './tutorialfront.component';

describe('TutorialfrontComponent', () => {
  let component: TutorialfrontComponent;
  let fixture: ComponentFixture<TutorialfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
