import { Component } from '@angular/core';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-testt',
  standalone: true,
  imports: [CustomButtonComponent,RouterLink],
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.scss'
})
export class TesttComponent {

}
