import { Component } from '@angular/core';
import { SpeedotransferloginComponent } from '../speedotransferlogin/speedotransferlogin.component';
import { ThirdpageloginComponent } from '../loginandregistration/thirdpagelogin/thirdpagelogin.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-login3',
  standalone: true,
  imports: [SpeedotransferloginComponent, ThirdpageloginComponent,Footer2Component],
  templateUrl: './login3.component.html',
  styleUrl: './login3.component.scss'
})
export class Login3Component {

}
