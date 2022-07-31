import { TestBed, async, inject } from "@angular/core/testing";

import { UserCanActivateRouteGuard } from "./user-can-activate-route-guard.guard";

describe("UserCanActivateRouteGuardGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCanActivateRouteGuard]
    });
  });

  it("should ...", inject(
    [UserCanActivateRouteGuard],
    (guard: UserCanActivateRouteGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
