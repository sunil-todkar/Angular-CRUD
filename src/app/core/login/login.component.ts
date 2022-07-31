import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Input
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrationService } from "../registration.service";
import { UserIdleService } from "angular-user-idle";
import { SimpleModalService } from "ngx-simple-modal";
import { AlertComponent } from "src/app/shared/alert.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  @Input() loginModelRef;
  LoginArg: any;
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _RegistrationService: RegistrationService,
    private userIdle: UserIdleService,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    console.log("In Login OnInit");
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      localStorage.removeItem("LoggedIn");
      this.SimpleModalService.addModal(AlertComponent, {
        ImagePath: "../../assets/images/session.png",
        title: "Session Expires!",
        message: "Please login again!!!"
      });
      this.router.navigate(["/home"]);
    });
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.LoginArg = this.loginForm.value;
      this.validateLogin(this.LoginArg);
    }
  }
  validateLogin(data) {
    this._RegistrationService.login(data).subscribe(
      response => {
        if (response.length === 0) {
          this.showError = !this.showError;
        } else {
          this.loginModelRef.hide();
          localStorage.setItem("LoggedIn", "true");
          this.router.navigate(["/products"]);
          console.log("Response", response);
        }
      },
      err => {
        console.log("Error:", err);
      }
    );
  }
}
