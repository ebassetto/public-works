import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// models
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'ft-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input()
  cards: Card[] | null = [];

  @Output()
  viewCardMovementsEvent = new EventEmitter<string>();

  @Output()
  deleteCardEvent = new EventEmitter<string>();

  @Output()
  openCardFormEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  goToCardMovements(cardId: string) {
    this.viewCardMovementsEvent.emit(cardId);
  }

  deleteCard(cardId: string) {
    this.deleteCardEvent.emit(cardId);
  }

  openCardForm($event: any) {
    this.openCardFormEvent.emit($event);
  }
}
