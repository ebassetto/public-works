import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// models
import { Card } from '../models/card.model';
import { CardForm } from '../models/card-form.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.apiUrl + '/cards');
  }

  addCard(cardForm: CardForm): Observable<Card> {
    return this.http.post<Card>(environment.apiUrl + '/cards', cardForm);
  }

  deleteCard(cardId: string): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiUrl + '/cards/' + cardId);
  }

  getCardMovements(cardId: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/cards/' + cardId);
  }
}
