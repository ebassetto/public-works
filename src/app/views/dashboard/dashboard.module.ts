import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

// components
import { CardFormComponent } from '../cards/components/card-form/card-form.component';
import { CardListComponent } from '../cards/components/card-list/card-list.component';
import { ContactFormComponent } from '../contacts/components/contact-form/contact-form.component';
import { ContactListComponent } from '../contacts/components/contact-list/contact-list.component';
import { CardsComponent } from '../cards/cards.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { MovementComponent } from '../movements/components/movement/movement.component';
import { MovementsComponent } from '../movements/movements.component';
import { TaxesComponent } from '../taxes/taxes.component';
import { TransferComponent } from '../transfer/transfer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

// pipes
import { TruncatePipe } from '../movements/pipes/truncate.pipe';

@NgModule({
  declarations: [
    // components
    DashboardComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent,
    MovementComponent,
    MovementsComponent,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    ContactFormComponent,
    DashboardComponent,
    TaxesComponent,
    MenuComponent, // da capire!
    // pipes
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
