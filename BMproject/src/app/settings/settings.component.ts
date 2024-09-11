import { Component,Input } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../shared-input/shared-input.component';
import { SmallloginComponent } from '../smalllogin/smalllogin.component';
import { ThirdpageloginComponent } from '../loginandregistration/thirdpagelogin/thirdpagelogin.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent,SmallloginComponent,ThirdpageloginComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  @Input() titleText: string = 'Settings';
  @Input() descriptionText: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.';
  @Input() emailLabel: string = 'Full name';
  @Input() passwordLabel: string = 'Country ';
  @Input() accountText: string = "Already have an account?";
  @Input() createAccountText: string = 'Login';
  

}
