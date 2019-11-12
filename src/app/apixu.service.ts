import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=e37e761af0903cfbf61d959b06f484ac&query='+location
      );
  }
}
