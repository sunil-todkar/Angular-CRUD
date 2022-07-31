import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { HomeSliderService } from "../../core/home-slider.service";

@Injectable({
  providedIn: "root"
})
export class HomeResolverGuard implements Resolve<any> {
  constructor(private HomeSliderService: HomeSliderService) {}

  resolve() {
    return this.HomeSliderService.getHomeSlider();
  }
}
