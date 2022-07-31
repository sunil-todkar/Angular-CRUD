import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailsResolverGuard } from './product-details-resolver.guard';

describe('ProductDetailsResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailsResolverGuard]
    });
  });

  it('should ...', inject([ProductDetailsResolverGuard], (guard: ProductDetailsResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
