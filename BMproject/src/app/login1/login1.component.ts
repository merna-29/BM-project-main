import { Component } from '@angular/core';
import { FirstpageloginComponent } from '../loginandregistration/firstpagelogin/firstpagelogin.component';
import { SpeedotransferloginComponent } from '../speedotransferlogin/speedotransferlogin.component';
import { TopPageOneLoginComponent } from '../top-page-one-login/top-page-one-login.component';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [FirstpageloginComponent,SpeedotransferloginComponent,TopPageOneLoginComponent,Footer2Component],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss'
})
export class Login1Component {

}
