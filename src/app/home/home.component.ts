import { Component, OnInit } from "@angular/core";
import { HomeSliderService } from "../core/home-slider.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  homeSliders = [];
  constructor(private _homeSliderService: HomeSliderService) {}

  ngOnInit() {
    this.getHomeSlider();
  }
  getHomeSlider() {
    this._homeSliderService.getHomeSlider().subscribe(
      response => {
        this.homeSliders = response;
        //console.log("Home Slider Response", this.homeSliders);
      },
      err => {
        console.log("Error", err);
      }
    );
  }
}
