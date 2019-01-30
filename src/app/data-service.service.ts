import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getCity(city) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a7e4c95c0333ec8406259e91cb89bc4`
    );
  }
}
