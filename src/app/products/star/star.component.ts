import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.scss"]
})
export class StarComponent implements OnInit {
  max: number = 5;
  @Input() rate: number;
  isReadonly: boolean = true;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === "Enter") {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
  onClick(): void {
    this.ratingClicked.emit(`You are clicked on star rating ${this.rate}`);
  }
}
