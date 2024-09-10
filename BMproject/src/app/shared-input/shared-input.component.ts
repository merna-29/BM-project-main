
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { FirstpageloginComponent } from '../loginandregistration/firstpagelogin/firstpagelogin.component';
// import { SmallloginComponent } from '../smalllogin/smalllogin.component';
import { LoginComponent } from '../login/login.component';
// import { AccountformComponent } from '../accountform/accountform.component';

@Component({
  selector: 'app-shared-input',
  standalone: true,
  imports: [CommonModule,LoginComponent],
  templateUrl: './shared-input.component.html',
  styleUrl: './shared-input.component.scss'
})
export class SharedInputComponent {
  // Define Input properties to customize the input field
  @Input() type: string = 'text'; // Default input type is 'text'
  @Input() value: string = ''; // Default input content
  @Input() placeholder: string = ''; // Default placeholder
  @Input() width: string = '100%'; // Default width of the input

}
