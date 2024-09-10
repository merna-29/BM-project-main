import { Component } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';

@Component({
  selector: 'app-step-three-money',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './step-three-money.component.html',
  styleUrl: './step-three-money.component.scss'
})
export class StepThreeMoneyComponent {

}
