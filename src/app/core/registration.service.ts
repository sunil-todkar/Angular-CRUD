import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user";
import { Observable } from "rxjs";
import { map, delay } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private geoLocationURL = "https://geodata.solutions/restapi?dd=1";
  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<any>(this.proxyurl + this.geoLocationURL);
  }

  getStates(code: any) {
    return this.http.get<any>(
      this.proxyurl + this.geoLocationURL + "&country=" + code
    );
  }

  addUser(user: any): Observable<User> {
    return this.http.post<User>(
      this.baseURL + "/registration",
      user,
      httpOptions
    );
  }

  duplicateEmailCheck(email) {
    return this.http.get(`${this.baseURL}/registration`).pipe(
      delay(1000),
      map((res: Array<any>) => res),
      map(users => users.filter(user => user.email === email)),
      map(users => !users.length)
    );
  }

  login(data): Observable<any> {
    //debugger;
    return this.http
      .get(`${this.baseURL}/registration`)
      .pipe(
        map((res: Array<any>) =>
          res.filter(
            user =>
              user.email === data.username && user.password === data.password
          )
        )
      );
  }
}
