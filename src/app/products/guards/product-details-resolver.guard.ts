import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ProductlistService } from "../../core/productlist.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductDetailsResolverGuard implements Resolve<any> {
  constructor(private ProductlistService: ProductlistService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.ProductlistService.getProductDetails(route.paramMap.get("id"));
  }
}
