import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialrightComponent } from './tutorialright.component';

describe('TutorialrightComponent', () => {
  let component: TutorialrightComponent;
  let fixture: ComponentFixture<TutorialrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
