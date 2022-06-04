import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

// models
import { Card } from 'src/app/models/card.model';
import { CardForm } from 'src/app/models/card-form.model';

// services
import { CardsService } from 'src/app/api/cards.service';

@Component({
  selector: 'ft-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards$!: Observable<Card[] | null>;

  constructor(
    private cardsService: CardsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

  deleteCard(cardId: string) {
    // API deleteCard
    this.snackBar.open(`Deleted credit card ${cardId}`, 'Close');
  }

  addCard(form: CardForm) {
    // API addCard
    this.snackBar.open('Added credit card', 'Close');
  }
}
