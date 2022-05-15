import { TestBed } from '@angular/core/testing';

import { LoadingZoneLoaderService } from './loading-zone-loader.service';

describe('LoadingZoneLoaderService', () => {
  let service: LoadingZoneLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingZoneLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
