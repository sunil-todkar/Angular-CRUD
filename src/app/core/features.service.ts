import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Features } from "../models/features";
@Injectable({
  providedIn: "root"
})
export class FeaturesService {
  private acmeFBaseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Features[]> {
    return this.http.get<Features[]>(this.acmeFBaseURL + "features");
  }
}
