import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  // getContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(environment.apiUrl + '/contacts');
  // }

  // addContact(): Observable<Contact> {
  //   return this.http.post<Card>(environment.apiUrl + '/contacts');
  // }

  // updateContact(contactId: string): Observable<Contact> {
  //   return this.http.put<Card>(environment.apiUrl + '/contacts/' + contactId);
  // }

  // deleteContact(contactId: string): Observable<boolean> {
  //   return this.http.delete<boolean>(environment.apiUrl + '/contacts/' + contactId);
  // }
}
