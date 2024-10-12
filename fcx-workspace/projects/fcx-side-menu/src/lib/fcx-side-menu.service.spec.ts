import { TestBed } from '@angular/core/testing';

import { FcxSideMenuService } from './fcx-side-menu.service';

describe('FcxSideMenuService', () => {
  let service: FcxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
