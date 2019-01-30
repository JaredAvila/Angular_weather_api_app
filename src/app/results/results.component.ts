import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.sass"]
})
export class ResultsComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  weatherData: Object = {};
  imgStatus: String;
  cityName: String;
  error: Boolean = false;
  tempF: number = 0;
  tempC: number = 0;
  humidity: String = "";
  windSpeed: number = 0;
  conditions: Array<String> = [];

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.cityName = data["city"];
      this.getData();
    });
  }

  getData() {
    let obs = this.dataService.getCity(this.cityName);
    obs.subscribe(
      data => {
        this.weatherData = data;
        console.log("data: ", this.weatherData["weather"]);
        let queryString = "";
        for (let i = 0; i < this.weatherData["weather"].length; i++) {
          if (i === this.weatherData["weather"].length - 1) {
            queryString += this.weatherData["weather"][i]["main"];
          } else {
            queryString += this.weatherData["weather"][i]["main"] + "+";
          }
        }
        this.imgStatus = "https://source.unsplash.com/400x320/?" + queryString;
        this.humidity = this.weatherData["main"]["humidity"];
        this.tempF = Math.round(
          ((this.weatherData["main"]["temp"] - 273.64) * 9) / 5 + 32
        );
        this.tempC = Math.round(this.weatherData["main"]["temp"] - 273.15);
        this.windSpeed = Math.round(this.weatherData["wind"]["speed"] * 2.237);
        this.conditions = this.weatherData["weather"];
      },
      err => {
        this.error = true;
      }
    );
  }
}
