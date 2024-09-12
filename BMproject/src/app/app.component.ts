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
import { StepThreeMoneyComponent } from './step-three-money/step-three-money.component';
import { StepOneMoneyComponent } from './step-one-money/step-one-money.component';
import { CirclesComponent } from './circles/circles.component';
import { MyprofleComponent } from './myprofle/myprofle.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { Home3Component } from './home3/home3.component';
import { Forum2Component } from './forum2/forum2.component';
import { Nav2Component } from './nav2/nav2.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { MyprofileeComponent } from './myprofilee/myprofilee.component';
import { Moneytransfer1Component } from './moneytransfer1/moneytransfer1.component';
import { Moneytransfer2Component } from './moneytransfer2/moneytransfer2.component';
import { Moneytransfer3Component } from './moneytransfer3/moneytransfer3.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Account1Component } from './account1/account1.component';
import { Account2Component } from './account2/account2.component';
import { Account3Component } from './account3/account3.component';
import { Account4Component } from './account4/account4.component';
import { ErrorrComponent } from './errorr/errorr.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HelppComponent } from './helpp/helpp.component';
import { HelppageComponent } from './helppage/helppage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StartComponent,ForumComponent,NavComponent,FooterComponent,ApplicationComponent,CustomButtonComponent,SharedInputComponent,
    LoginComponent,SpeedotransferloginComponent,SmallloginComponent,FirstpageloginComponent,SecondpageloginComponent,TopPageOneLoginComponent,
    ThirdpageloginComponent,AccountformComponent,TesttComponent,StepThreeMoneyComponent,StepOneMoneyComponent,CirclesComponent,
    MyprofleComponent,PaymentHistoryComponent,SettingsComponent,ChangePasswordComponent,HomeComponent,Home2Component,MoneytransferComponent,
    Home2Component,Home3Component,Forum2Component,Login1Component,Login2Component,Login3Component,MyprofileeComponent,Moneytransfer1Component,
    Moneytransfer2Component,Moneytransfer3Component,SidebarComponent,Account1Component,Account2Component,Account3Component,Account4Component,
    ErrorrComponent,ErrorpageComponent,HelppComponent,HelppageComponent,RouterOutlet
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BMproject';
  
}


