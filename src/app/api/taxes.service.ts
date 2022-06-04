import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  constructor(private http: HttpClient) { }

  // addTaxes(): Observable<boolean> {
  //   return this.http.post<boolean>(environment.apiUrl + '/taxes');
  // }
}
