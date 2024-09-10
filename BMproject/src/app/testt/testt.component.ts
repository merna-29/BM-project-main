import { Component } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
@Component({
  selector: 'app-testt',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.scss'
})
export class TesttComponent {

}
