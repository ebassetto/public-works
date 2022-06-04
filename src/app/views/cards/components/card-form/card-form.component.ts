import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardForm } from 'src/app/models/card-form.model';

@Component({
  selector: 'ft-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {

  @Output()
  addCardEvent = new EventEmitter<CardForm>();

  @Output()
  closeCardEvent = new EventEmitter<void>();

  types: string[] = ['visa', 'mastercard'];

  cardForm = this.fb.group({
    types: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    number: ['', [
      Validators.required,
      Validators.pattern("^[0-9]{16}$")
    ]],
    securityCode: ['', [
      Validators.required,
      Validators.pattern("^[0-9]{3}$")
    ]]
  });

  constructor(private fb: FormBuilder) {}

  // TODO: controllare valore iniziale della select

  addCard() {
    if (this.cardForm.valid) {
      this.addCardEvent.emit(this.cardForm.value);
      this.cleanup();
    }
  }

  closeAddCard($event: any) {
    this.cleanup();
    this.closeCardEvent.emit($event);
  }

  cleanup() {
    this.cardForm.reset();
  }
}
