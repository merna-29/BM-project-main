import { Component } from '@angular/core';
import { HelppageComponent } from "../helppage/helppage.component";
import { NavComponent } from "../nav/nav.component";
import { MyaccountComponent } from "../myaccount/myaccount.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-helpp',
  standalone: true,
  imports: [HelppageComponent, NavComponent, MyaccountComponent, FooterComponent], 
  templateUrl: './helpp.component.html',
  styleUrls: ['./helpp.component.scss']
})
export class HelppComponent {
  userName: string = 'Help';  
  accountLinkText: string = 'help'
}
