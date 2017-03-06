import { TestBed, inject } from '@angular/core/testing';

import { MangaEdenService } from './manga-eden.service';

describe('MangaEdenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MangaEdenService]
    });
  });

  it('should ...', inject([MangaEdenService], (service: MangaEdenService) => {
    expect(service).toBeTruthy();
  }));
});
