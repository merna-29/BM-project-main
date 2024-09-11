import { Component,Input } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../shared-input/shared-input.component';

@Component({
  selector: 'app-step-one-money',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent],
  templateUrl: './step-one-money.component.html',
  styleUrl: './step-one-money.component.scss'
})
export class StepOneMoneyComponent {
  @Input() titleText: string = 'How much are you sending?';
  @Input() emailLabel: string = 'Amount';
  @Input() passwordLabel: string = 'Recipient Name';
  @Input() additionalLabel: string = 'Recipient Account';
  @Input() additionalPlaceholder: string = 'Enter additional info';
  @Input() accountText: string = "";
  @Input() createAccountText: string = '';

}
