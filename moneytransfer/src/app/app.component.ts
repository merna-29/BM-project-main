import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HelppageComponent } from './helppage/helppage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,MoneytransferComponent,MyaccountComponent,MyprofileComponent,HelppageComponent,ErrorpageComponent,LoginpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moneytransfer';
}
