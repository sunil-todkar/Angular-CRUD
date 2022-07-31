import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { StarComponent } from "./star/star.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingModule } from "ngx-bootstrap/rating";
import { AlertModule } from "ngx-bootstrap/alert";
import { AppRoutingModule } from "../app-routing.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductRoutingModule } from "./product.routing.modules";
import { ProductListResolveGuard } from "./guards/product-list-resolve.guard";
import { ProductDetailsResolverGuard } from "./guards/product-details-resolver.guard";
import { UserCanActivateRouteGuard } from "../core/login/user-can-activate-route-guard.guard";

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    RatingModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    ProductListResolveGuard,
    ProductDetailsResolverGuard,
    UserCanActivateRouteGuard
  ]
})
export class ProductModule {}
