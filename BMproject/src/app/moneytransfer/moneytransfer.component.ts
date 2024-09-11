import { Component } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';
import { StepOneMoneyComponent } from '../step-one-money/step-one-money.component';
import { ApplicationComponent } from '../application/application.component';

@Component({
  selector: 'app-moneytransfer',
  standalone: true,
  imports: [CirclesComponent,StepOneMoneyComponent,ApplicationComponent],
  templateUrl: './moneytransfer.component.html',
  styleUrl: './moneytransfer.component.scss'
})
export class MoneytransferComponent {

}
