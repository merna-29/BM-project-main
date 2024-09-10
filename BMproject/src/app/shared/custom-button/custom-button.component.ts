import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForumComponent } from '../../forum/forum.component';
// import { FirstpageloginComponent } from '../../loginandregistration/firstpagelogin/firstpagelogin.component';
// import { SmallloginComponent } from '../../smalllogin/smalllogin.component';
@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule,ForumComponent],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  
    @Input() text: string = 'Continue'; // Default text
    @Input() width: string = '100%'; // Default width
    @Input() backgroundColor: string = '#871E35'; // Default background color
    @Input() textColor: string = '#FFFFFF'; // Default text color
  

}
