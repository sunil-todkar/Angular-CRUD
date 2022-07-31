import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-terms-condition",
  templateUrl: "./terms-condition.component.html",
  styleUrls: ["./terms-condition.component.scss"]
})
export class TermsConditionComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    //this.list.push("");
  }
}
