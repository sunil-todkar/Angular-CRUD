import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TermsConditionComponent } from "src/app/terms-condition/terms-condition.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModalTermComponent() {
    const initialState = {
      list: [],
      title: "Terms and Condition"
    };
    this.bsModalRef = this.modalService.show(
      TermsConditionComponent,
      Object.assign({ initialState }, { class: "terms-modal modal-lg" })
    );
    this.bsModalRef.content.closeBtnName = "Close";
  }
}
