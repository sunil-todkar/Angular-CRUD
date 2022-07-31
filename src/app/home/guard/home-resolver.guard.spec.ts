import { TestBed, async, inject } from '@angular/core/testing';

import { HomeResolverGuard } from './home-resolver.guard';

describe('HomeResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeResolverGuard]
    });
  });

  it('should ...', inject([HomeResolverGuard], (guard: HomeResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
