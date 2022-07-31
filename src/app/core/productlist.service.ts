import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../products/product";
import { tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ProductlistService {
  acmeBaseURL = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.acmeBaseURL + "/products");
  }

  getProductDetails(id): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.acmeBaseURL + "/products/" + id);
  }

  addProduct(product): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(this.acmeBaseURL + "/products", product);
  }

  updateProduct(id, product): Observable<IProduct[]> {
    return this.http
      .put<IProduct[]>(
        `${this.acmeBaseURL}/products/${id}`,
        product,
        httpOptions
      )
      .pipe(tap(_ => console.log("Update Product Id", id)));
  }

  /* Delete Product */
  deleteProduct(id): Observable<IProduct[]> {
    const url = `${this.acmeBaseURL}/products/${id}`;
    return this.http.delete<IProduct[]>(url, httpOptions).pipe(
      tap(
        _ => {
          console.log("Deleted Product Id : ", id);
        },
        err => {
          console.log("Delete Product Error", err);
        }
      )
    );
  }
}
