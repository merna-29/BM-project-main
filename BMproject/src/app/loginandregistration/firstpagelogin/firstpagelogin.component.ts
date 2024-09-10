import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { SpeedotransferloginComponent } from '../../speedotransferlogin/speedotransferlogin.component';
import { SmallloginComponent } from '../../smalllogin/smalllogin.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { SharedInputComponent } from '../../shared-input/shared-input.component';
import { TopPageOneLoginComponent } from '../../top-page-one-login/top-page-one-login.component';


@Component({
  selector: 'app-firstpagelogin',
  standalone: true,
  imports: [LoginComponent,SpeedotransferloginComponent,SmallloginComponent,CustomButtonComponent,SharedInputComponent,TopPageOneLoginComponent],
  templateUrl: './firstpagelogin.component.html',
  styleUrl: './firstpagelogin.component.scss'
})
export class FirstpageloginComponent {

}
