import { Component,Input } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../shared-input/shared-input.component';
import { SmallloginComponent } from '../smalllogin/smalllogin.component';

@Component({
  selector: 'app-forum2',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent,SmallloginComponent],
  templateUrl: './forum2.component.html',
  styleUrl: './forum2.component.scss'
})
export class Forum2Component {
  @Input() titleText: string = 'Current Balance';
  @Input() descriptionText: string = 'Delivery Time: By May 20th';
  @Input() emailLabel: string = 'Send Amount';
  @Input() passwordLabel: string = 'Country ';
  @Input() accountText: string = "By Clicking Continue, I’m agree with ";
  @Input() createAccountText: string = 'Terms & Policy';
}
