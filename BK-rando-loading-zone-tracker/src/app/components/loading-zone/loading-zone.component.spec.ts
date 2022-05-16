import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingZoneComponent } from './loading-zone.component';

describe('LoadingZoneComponent', () => {
  let component: LoadingZoneComponent;
  let fixture: ComponentFixture<LoadingZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
