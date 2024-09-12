  import { Component,Input,Output,EventEmitter } from '@angular/core';
  import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
  import { SharedInputComponent } from '../shared-input/shared-input.component';
  

@Component({
  selector: 'app-smalllogin',
  standalone: true,
  imports: [CustomButtonComponent,SharedInputComponent],
  templateUrl: './smalllogin.component.html',
  styleUrl: './smalllogin.component.scss'
})
export class SmallloginComponent {

  @Input() titleText: string = 'Login here';
  @Input() descriptionText: string = 'Welcome back.Login to your account';
  @Input() emailLabel: string = 'Your email address';
  @Input() passwordLabel: string = 'Password';
  @Input() accountText: string = "Don't have an account?";
  @Input() createAccountText: string = 'Create Account';

  @Output() loginClicked = new EventEmitter<void>(); // EventEmitter for login button

  // Method to emit event when login button is clicked
  onLoginButtonClick() {
    this.loginClicked.emit();
  }
}
