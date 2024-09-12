import { Component } from '@angular/core';
import { Nav2Component } from '../nav2/nav2.component';
import { FooterComponent } from '../footer/footer.component';
import { ApplicationComponent } from '../application/application.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account2',
  standalone: true,
  imports: [Nav2Component,FooterComponent,ApplicationComponent,PaymentHistoryComponent,RouterLink],
  templateUrl: './account2.component.html',
  styleUrl: './account2.component.scss'
})
export class Account2Component {

}
