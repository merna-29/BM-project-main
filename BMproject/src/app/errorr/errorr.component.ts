import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ErrorpageComponent } from "../errorpage/errorpage.component";
import { FooterComponent } from "../footer/footer.component";
import { MyaccountComponent } from "../myaccount/myaccount.component";

@Component({
  selector: 'app-errorr',
  standalone: true,
  imports: [NavComponent, ErrorpageComponent, FooterComponent, MyaccountComponent],
  templateUrl: './errorr.component.html',
  styleUrl: './errorr.component.scss'
})
export class ErrorrComponent {

  userName: string = 'Help';  
  accountLinkText: string = 'help'

}
