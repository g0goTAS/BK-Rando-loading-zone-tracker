import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSectionComponent } from './level-section.component';

describe('LevelSectionComponent', () => {
  let component: LevelSectionComponent;
  let fixture: ComponentFixture<LevelSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
