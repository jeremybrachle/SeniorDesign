import { TestBed } from '@angular/core/testing';

import { WpDBService } from './wp-db.service';

describe('WpDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpDBService = TestBed.get(WpDBService);
    expect(service).toBeTruthy();
  });
});
