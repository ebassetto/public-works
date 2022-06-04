import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  routes = [
    {
      link: '/dashboard',
      icon: 'home',
      title: 'Home'
    },
    {
      link: '/dashboard/cards',
      icon: 'credit_card',
      title: 'Carte'
    },
    {
      link: '/dashboard/movements',
      icon: 'receipt_long',
      title: 'Movimenti'
    },
    {
      link: '/dashboard/transfer',
      icon: 'paid',
      title: 'Trasferisci'
    },
    {
      link: '/dashboard/appointments',
      icon: 'event',
      title: 'Appuntamenti'
    },
    {
      link: '/dashboard/taxes',
      icon: 'summarize',
      title: 'Tasse'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
