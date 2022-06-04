import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'appointments',
				loadChildren: () => import('../appointments/appointments.module').then((mod) => mod.AppointmentsModule)
			},
			{
				path: 'cards',
				loadChildren: () => import('../cards/cards.module').then((mod) => mod.CardsModule)
			},
			{
				path: 'contacts',
				loadChildren: () => import('../contacts/contacts.module').then((mod) => mod.ContactsModule)
			},
      {
				path: 'movements',
				loadChildren: () => import('../movements/movements.module').then((mod) => mod.MovementsModule)
			},
      {
				path: 'transfer',
				loadChildren: () => import('../transfer/transfer.module').then((mod) => mod.TransferModule)
			},
      {
				path: 'taxes',
				loadChildren: () => import('../taxes/taxes.module').then((mod) => mod.TaxesModule)
			}
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
