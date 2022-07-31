import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  HostListener
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  logginInUser: any;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) {}

  ngOnInit() {}

  ngDoCheck() {
    this.logginInUser = localStorage.getItem("LoggedIn");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  logout() {
    localStorage.removeItem("LoggedIn");
    this.router.navigate(["/home"]);
  }

  // @HostListener("window:beforeunload", ["$event"])
  // public beforeunloadHandler($event) {
  //   // $event.returnValue = "Are you sure?";
  //   localStorage.removeItem("LoggedIn");
  // }
}
