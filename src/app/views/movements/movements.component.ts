import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  amount: number = 0;
  maxMovements: number = 21;
  limit: number = 5;
  offset: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {

  }
}
