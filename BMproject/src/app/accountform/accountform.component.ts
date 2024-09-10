import { Component,Input } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../shared-input/shared-input.component';

@Component({
  selector: 'app-accountform',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent],
  templateUrl: './accountform.component.html',
  styleUrl: './accountform.component.scss'
})
export class AccountformComponent {
  @Input() titleText: string = 'Create Your Account';
  @Input() descriptionText: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.';
  @Input() emailLabel: string = 'Full name';
  @Input() passwordLabel: string = 'Email ';
  @Input() accountText: string = "Already have an account?";
  @Input() createAccountText: string = 'Login';
  
}
