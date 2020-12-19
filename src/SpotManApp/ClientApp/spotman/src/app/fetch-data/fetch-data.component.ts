import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../interfaces/weather-forecast';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'spo-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService) { }
  forecasts: WeatherForecast[];
  ngOnInit(): void {
    this.getForecast();
  }

  getForecast(): void {
    this.fetchDataService.getWeather().subscribe(forecasts => this.forecasts = forecasts);
  }

}
