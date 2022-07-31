import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductlistService } from "../../core/productlist.service";
import { AlertComponent } from "../../shared/alert.component";
import { SimpleModalService } from "ngx-simple-modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  imgProductSrc: any;
  imgProductPath: string =
    "../../../assets/images/add-photo-image-placeholder.jpg";
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Input() productModelRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _ProductlistService: ProductlistService,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      image: ["", Validators.required],
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
    return this.addProductForm.controls;
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addProductForm.invalid) {
      return;
    } else {
      console.log("Add products is: ", this.addProductForm.value);
      const newProductData = this.addProductForm.value;

      this._ProductlistService.addProduct(newProductData).subscribe(
        response => {
          console.log("New product added sucessfully: ", response);
          if (response) {
            this.SimpleModalService.addModal(AlertComponent, {
              ImagePath: "../../assets/images/success.png",
              title: "Sucess",
              message: "New Product Added Sucessfully!!!"
            });
            this.productModelRef.hide();
            this.router.navigate(["/products"]);
          }
        },
        err => {
          console.log("Error Is:", err);
        }
      );
    }
  }
  cancelAddProduct() {
    this.productModelRef.hide();
    return false;
  }
}
