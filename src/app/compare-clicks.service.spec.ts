/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompareClicksService } from './compare-clicks.service';

describe('CompareClicksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareClicksService]
    });
  });

  it('should ...', inject([CompareClicksService], (service: CompareClicksService) => {
    expect(service).toBeTruthy();
  }));
});
