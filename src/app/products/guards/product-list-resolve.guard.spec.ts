import { TestBed, async, inject } from '@angular/core/testing';

import { ProductListResolveGuard } from './product-list-resolve.guard';

describe('ProductListResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListResolveGuard]
    });
  });

  it('should ...', inject([ProductListResolveGuard], (guard: ProductListResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
