import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHistoryComponent } from './progress-history.component';

describe('ProgressHistoryComponent', () => {
  let component: ProgressHistoryComponent;
  let fixture: ComponentFixture<ProgressHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
