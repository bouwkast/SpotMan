import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WeatherForecast } from '../interfaces/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { 
  }

  getWeather(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('weatherforecast');
  }
}

