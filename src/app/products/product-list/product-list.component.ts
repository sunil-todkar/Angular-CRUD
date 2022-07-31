import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductlistService } from "../../core/productlist.service";
import { IProduct } from "../product";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { SimpleModalService } from "ngx-simple-modal";
import { AlertComponent } from "../../shared/alert.component";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { ConfirmComponent } from "src/app/shared/confirm.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  tableTitle: string = "Product List";
  products: IProduct[] = [];
  product: any;
  filteredProducts: IProduct[] = [];
  alertRating: string;
  dismissible = true;
  rateValue: string;
  showImages: boolean = false;
  modalRef: BsModalRef;
  editProductData: any;
  confirmResult = null;

  constructor(
    private productService: ProductlistService,
    private modalService: BsModalService,
    private SimpleModalService: SimpleModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "add-products" })
    );
  }

  openEditProductModal(productEdittemplate: TemplateRef<any>, product: any) {
    this.product = product;
    this.modalRef = this.modalService.show(
      productEdittemplate,
      Object.assign({}, { class: "edit-products" })
    );
    console.log("Edit Product Parent Data Is: ", this.product);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.route.data.subscribe((data: Data) => {
      this.products = data["product"];
      this.filteredProducts = this.products;
    });
  }

  // Toggle product images
  toggleProductImages() {
    this.showImages = !this.showImages;
  }

  // Filter Products
  filterProducts(value) {
    value = value.toLowerCase();
    if (!value) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(item => {
        return (
          item.name.toLowerCase().includes(value) ||
          item.status.toLowerCase().includes(value) ||
          item.code.toLowerCase().includes(value) ||
          item.price === value
        );
      });
    }
  }

  onRateClick(message: string): void {
    this.rateValue = message;
  }

  /* Delete Product Starts Here */
  deleteProduct(id) {
    console.log("Product Id Is:", id);
    this.SimpleModalService.addModal(ConfirmComponent, {
      imagePath: "../../assets/images/delete.png",
      title: "Confirm",
      message: "Are you sure want to delete it?"
    }).subscribe(isConfirmed => {
      this.confirmResult = isConfirmed;
      if (this.confirmResult) {
        this.productService.deleteProduct(id).subscribe(response => {
          if (response) {
            this.SimpleModalService.addModal(AlertComponent, {
              ImagePath: "../../assets/images/success.png",
              title: "Success!",
              message: "Product delete successfully!!!"
            });
          }
          this.getProducts();
        });
      } else if (!this.confirmResult) {
        this.router.navigate(["products"]);
      } else {
        return false;
      }
    });
  }
}
