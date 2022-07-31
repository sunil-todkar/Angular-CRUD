import { Injectable } from "@angular/core";
import { ProductlistService } from "../../core/productlist.service";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../product";

@Injectable({
  providedIn: "root"
})
export class ProductListResolveGuard implements Resolve<any> {
  acmeBaseURL = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private ProductlistService: ProductlistService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ProductlistService.getProducts();
  }
}
