import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ForumComponent } from './forum/forum.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import { SharedInputComponent } from './shared-input/shared-input.component';
import { LoginComponent } from './login/login.component';
import { SpeedotransferloginComponent } from './speedotransferlogin/speedotransferlogin.component';
import { SmallloginComponent } from './smalllogin/smalllogin.component';
import { FirstpageloginComponent } from './loginandregistration/firstpagelogin/firstpagelogin.component';
import { SecondpageloginComponent } from './loginandregistration/secondpagelogin/secondpagelogin.component';
import { TopPageOneLoginComponent } from './top-page-one-login/top-page-one-login.component';
import { ThirdpageloginComponent } from './loginandregistration/thirdpagelogin/thirdpagelogin.component';
import { AccountformComponent } from './accountform/accountform.component';
import { TesttComponent } from './testt/testt.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StartComponent,ForumComponent,NavComponent,FooterComponent,ApplicationComponent,CustomButtonComponent,SharedInputComponent,
    LoginComponent,SpeedotransferloginComponent,SmallloginComponent,FirstpageloginComponent,SecondpageloginComponent,TopPageOneLoginComponent,
    ThirdpageloginComponent,AccountformComponent,TesttComponent
  ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BMproject';
}


