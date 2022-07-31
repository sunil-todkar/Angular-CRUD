import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductlistService } from "../../core/productlist.service";
import { Router } from "@angular/router";
import { SimpleModalService } from "ngx-simple-modal";
import { AlertComponent } from "src/app/shared/alert.component";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"]
})
export class EditProductComponent implements OnInit {
  updateProductForm: FormGroup;
  submitted = false;

  @Input() editProductData: any;
  @Input() editModelRef: any;
  imgProductSrc: any;

  constructor(
    private formBuilder: FormBuilder,
    private ProductlistService: ProductlistService,
    private router: Router,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit() {
    //console.log("In Edit Product Child Component: ", this.editProductData);
    this.updateProductForm = this.formBuilder.group({
      image: [""],
      name: ["", Validators.required],
      code: ["", Validators.required],
      status: ["", Validators.required],
      price: ["", Validators.required],
      ratings: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.updateProductForm.controls;
  }

  // Read image
  readImage(event): void {
    console.log("Event IS:", event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log("File Is: ", file);
      const reader = new FileReader();
      reader.onload = e => (this.imgProductSrc = reader.result);
      reader.readAsDataURL(file);
    }
  }

  //Hide modal when click on cancel button
  cancelEditProductModal() {
    this.editModelRef.hide();
    return false;
  }

  //Update product
  onEditProductSubmit() {
    console.log("In Update Product:");
    this.ProductlistService.updateProduct(
      this.editProductData.id,
      this.editProductData
    ).subscribe(() => {
      this.editModelRef.hide();
      this.SimpleModalService.addModal(AlertComponent, {
        ImagePath: "../../assets/images/success.png",
        title: "Sucess!",
        message: "Your data updated sucessfully!!!"
      });
      this.router.navigate(["products"]);
    });
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateProductForm.invalid) {
      return;
    }
  }
}
