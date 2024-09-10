import { Component } from '@angular/core';
import { SmallloginComponent } from '../../smalllogin/smalllogin.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../../shared-input/shared-input.component';
import { AccountformComponent } from '../../accountform/accountform.component';



@Component({
  selector: 'app-thirdpagelogin',
  standalone: true,
  imports: [SmallloginComponent,CustomButtonComponent,SharedInputComponent,AccountformComponent],
  templateUrl: './thirdpagelogin.component.html',
  styleUrl: './thirdpagelogin.component.scss'
})
export class ThirdpageloginComponent {

}
