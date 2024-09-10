import { Component } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

}
