import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutorialleftComponent } from "./tutorialleft.component";

describe("TutorialleftComponent", () => {
  let component: TutorialleftComponent;
  let fixture: ComponentFixture<TutorialleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialleftComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
