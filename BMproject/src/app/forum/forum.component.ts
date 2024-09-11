import { Component,Input } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../shared-input/shared-input.component';
import { SmallloginComponent } from '../smalllogin/smalllogin.component';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent,CustomButtonComponent,SmallloginComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  @Input() titleText: string = 'Send Amount';
  @Input() descriptionText: string = 'Delivery Time: By May 20th';
  @Input() emailLabel: string = 'Send Amount';
  @Input() passwordLabel: string = 'Country ';
  @Input() accountText: string = "By Clicking Continue, I’m agree with ";
  @Input() createAccountText: string = 'Terms & Policy';




}
