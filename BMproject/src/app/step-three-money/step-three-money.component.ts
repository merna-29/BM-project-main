import { Component } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-three-money',
  standalone: true,
  imports: [CustomButtonComponent,RouterLink],
  templateUrl: './step-three-money.component.html',
  styleUrl: './step-three-money.component.scss'
})
export class StepThreeMoneyComponent {

}
