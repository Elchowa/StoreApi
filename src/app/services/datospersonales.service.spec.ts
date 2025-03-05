import { TestBed } from '@angular/core/testing';

import { DatospersonalesService } from './datospersonales.service';

describe('DatospersonalesService', () => {
  let service: DatospersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatospersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
