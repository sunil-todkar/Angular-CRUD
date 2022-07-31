import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { map } from "rxjs/operators";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { RegistrationService } from "../../core/registration.service";
import { dobValidate } from "../../shared/date-of-birth.validator";

@Component({
  selector: "app-register-first",
  templateUrl: "./register-first.component.html",
  styleUrls: ["./register-first.component.scss"]
})
export class RegisterFirstComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  bsValue: Date = new Date();
  public state = "";
  public registration1Data: any;

  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _RegistrationService: RegistrationService
  ) {
    this.dpConfig.containerClass = "theme-dark-blue";
  }

  ngOnInit() {
    this.createRegiForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  createRegiForm() {
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      email: [
        "",
        [Validators.required, Validators.email],
        this.duplicateEmailCheck.bind(this)
      ],
      password: ["", Validators.required],
      dateOfBirth: ["", [Validators.required, dobValidate]],
      mobileNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    });
  }

  //Duplicate email check
  duplicateEmailCheck(control: AbstractControl) {
    //debugger;
    return this._RegistrationService.duplicateEmailCheck(control.value).pipe(
      map(res => {
        return res ? null : { emailTaken: true };
      })
    );
  }

  regGotoNext() {
    this.submitted = true;
    this.registration1Data = this.registerForm.value;
    console.log("Registration Form 1: ", this.registration1Data);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.router.navigate(["/register-second"], {
        state: this.registration1Data
      });
    }
  }
}
