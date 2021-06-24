import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { environment } from '../../../environments/environment';
import { Hourglass } from '../models/Hourglass';
import { HourglassResponse } from '../models/HourGlassResponse';

@Injectable({
  providedIn: 'root',
})

export class HourGlassService {
  constructor(private http: HttpClient) {}

  getCalculation(hourGlass: Hourglass): Observable<HourglassResponse> {
    const url = environment.apiUrl + 'Hourglass';
    return this.http.post<HourglassResponse>(url, hourGlass );
  }
}
