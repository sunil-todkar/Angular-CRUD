import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegistrationService } from "../../core/registration.service";
import { SimpleModalService } from "ngx-simple-modal";
import { AlertComponent } from "../../shared/alert.component";

@Component({
  selector: "app-register-second",
  templateUrl: "./register-second.component.html",
  styleUrls: ["./register-second.component.scss"]
})
export class RegisterSecondComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  User: any = ["Author", "eAdviser", "Student"];
  Countries: any = [];
  States: any = [];
  public state = "";
  // registrationData: any;
  registerUser: any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _registerService: RegistrationService,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit() {
    this.state = window.history.state;
    console.log("*********", this.state);
    this.createRegiForm();
    //Get country data
    this._registerService.getCountries().subscribe(
      response => {
        console.log("Country Data Is: ", response);
        this.Countries = response;
      },
      err => {
        console.log("Error Is: ", err);
      }
    );
  }

  createRegiForm() {
    this.registerForm = this.fb.group({
      userType: ["", [Validators.required]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // Choose city using select dropdown
  changeUser(e) {}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } else {
      const registrationData = Object.assign(
        this.registerForm.value,
        this.state
      );

      console.log("Registration Data Is:", registrationData);
      // Post registred data
      this._registerService.addUser(registrationData).subscribe(
        data => {
          if (data) {
            this.SimpleModalService.addModal(AlertComponent, {
              ImagePath: "../assets/images/success.png",
              title: "Sucess",
              message: "Data Sent Successfully...!!!!"
            });
          }
        },
        err => {
          console.log("Error Is: ", err);
        }
      );
    }
  }

  changeCountry(code) {
    //split array
    let _ccode = code.split(",");

    this._registerService.getStates(_ccode[0]).subscribe(
      response => {
        console.log("States Is: ", response);
        this.States = response;
      },
      err => {
        console.log("Error Is: ", err);
      }
    );
  }
}
