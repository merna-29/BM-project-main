import { Component,Input } from '@angular/core';
import { SharedInputComponent } from '../shared-input/shared-input.component';
import { SmallloginComponent } from '../smalllogin/smalllogin.component';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [SharedInputComponent,SmallloginComponent,CustomButtonComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  @Input() titleText: string = 'Settings';
  @Input() descriptionText: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.';
  @Input() emailLabel: string = 'Full name';
  @Input() passwordLabel: string = 'Country ';
  @Input() accountText: string = "Already have an account?";
  @Input() createAccountText: string = 'Login';
}
