import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListResolveGuard } from "./guards/product-list-resolve.guard";
import { ProductDetailsResolverGuard } from "./guards/product-details-resolver.guard";
import { UserCanActivateRouteGuard } from "../core/login/user-can-activate-route-guard.guard";

const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent,
    resolve: {
      product: ProductListResolveGuard
    },
    canActivate: [UserCanActivateRouteGuard]
  },
  {
    path: "products/:id",
    component: ProductDetailsComponent,
    resolve: { productDetails: ProductDetailsResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
