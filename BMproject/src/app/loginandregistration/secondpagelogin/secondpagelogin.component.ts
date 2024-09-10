import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { SpeedotransferloginComponent } from '../../speedotransferlogin/speedotransferlogin.component';
import { SmallloginComponent } from '../../smalllogin/smalllogin.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../../shared-input/shared-input.component';

@Component({
  selector: 'app-secondpagelogin',
  standalone: true,
  imports: [LoginComponent,SpeedotransferloginComponent,SmallloginComponent,CustomButtonComponent,SharedInputComponent],
  templateUrl: './secondpagelogin.component.html',
  styleUrl: './secondpagelogin.component.scss'
})
export class SecondpageloginComponent {

}
