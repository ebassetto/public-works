import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ft-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  @Input()
  date: string = '';

  @Input()
  amount: number = 0;

  @Input()
  type: string = 'in';

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
