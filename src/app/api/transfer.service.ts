import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  // addTransfer(): Observable<boolean> {
  //   return this.http.post<boolean>(environment.apiUrl + '/transfer');
  // }
}
