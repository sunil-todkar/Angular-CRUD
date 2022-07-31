import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { RegistrationService } from "../../core/registration.service";

@Injectable({
  providedIn: "root"
})
export class UserCanActivateRouteGuard implements CanActivate {
  constructor(private RegistrationService: RegistrationService) {}

  canActivate(): boolean {
    //debugger;
    const userLoggedIn = localStorage.getItem("LoggedIn");
    if (!userLoggedIn) {
      return false;
    }
    return true;
  }
}
