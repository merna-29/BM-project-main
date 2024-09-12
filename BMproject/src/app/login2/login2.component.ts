import { Component } from '@angular/core';
import { FirstpageloginComponent } from '../loginandregistration/firstpagelogin/firstpagelogin.component';
import { SpeedotransferloginComponent } from '../speedotransferlogin/speedotransferlogin.component';
import { Footer2Component } from '../footer2/footer2.component';
import { SecondpageloginComponent } from '../loginandregistration/secondpagelogin/secondpagelogin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [SecondpageloginComponent,SpeedotransferloginComponent,Footer2Component,CommonModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {
  isCenterContainerVisible = true; // Control visibility

  hideCenterContainer() {
    this.isCenterContainerVisible = false; // Hide the center container
  }
}
