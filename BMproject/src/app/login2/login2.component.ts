import { Component } from '@angular/core';
import { FirstpageloginComponent } from '../loginandregistration/firstpagelogin/firstpagelogin.component';
import { SpeedotransferloginComponent } from '../speedotransferlogin/speedotransferlogin.component';
import { Footer2Component } from '../footer2/footer2.component';
import { SecondpageloginComponent } from '../loginandregistration/secondpagelogin/secondpagelogin.component';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [SecondpageloginComponent,SpeedotransferloginComponent,Footer2Component],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {

}
