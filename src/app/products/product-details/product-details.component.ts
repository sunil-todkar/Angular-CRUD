import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductlistService } from "../../core/productlist.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string;
  productId: number;
  productData: any;
  constructor(
    private _activeRouter: ActivatedRoute,
    private router: Router,
    private _productService: ProductlistService
  ) {}

  ngOnInit() {
    this.productId = +this._activeRouter.snapshot.paramMap.get("id");
    this.getProductDetails(this.productId);
  }

  getProductDetails(productId: number) {
    this._productService.getProductDetails(productId).subscribe(
      response => {
        this.productData = response;
        console.log("Product Details Response: ", this.productData);
      },
      err => {
        console.log("Error", err);
      }
    );
  }
  goBack(): void {
    this.router.navigate(["/products"]);
  }
}
