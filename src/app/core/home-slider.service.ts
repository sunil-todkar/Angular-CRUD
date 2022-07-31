import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HomeSlider } from "../models/home-slider";

@Injectable({
  providedIn: "root"
})
export class HomeSliderService {
  private acmeBaseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) {}
  getHomeSlider(): Observable<HomeSlider[]> {
    return this.http.get<HomeSlider[]>(this.acmeBaseURL + "HomeSliders");
  }
}
