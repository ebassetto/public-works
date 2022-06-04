import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) {}

  // getLocations(): Observable<Location[]> {
  //   return this.http.get<Location[]>(environment.apiUrl + '/locations');
  // }

  // getSlots(locationId: string): Observable<DayWithSlots[]> {
  //   return this.http.get<DayWithSlots[]>(environment.apiUrl + '/slots/' + locationId);
  // }

  // getSchedule(): Observable<boolean> {
  //   return this.http.post<boolean>(environment.apiUrl + '/schedule');
  // }
}
