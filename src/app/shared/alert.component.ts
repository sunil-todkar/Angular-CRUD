import { Component } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";

export interface AlertModel {
  ImagePath?: string;
  title: string;
  message: string;
}

@Component({
  selector: "alert",
  template: `
    <div class="modal-content alert-box">
      <div class="modal-header">
        <img [src]="ImagePath || 'Path'" width="45px" />
        <h4>{{ title || "Alert!" }}</h4>
      </div>
      <div class="modal-body">
        <p>{{ message || "TADAA-AM!" }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="close()">
          OK
        </button>
      </div>
    </div>
  `
})
export class AlertComponent extends SimpleModalComponent<AlertModel, null>
  implements AlertModel {
  title: string;
  message: string;
  ImagePath?: string;
  constructor() {
    super();
  }
}
