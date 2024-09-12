import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ErrorpageComponent } from "../errorpage/errorpage.component";
import { FooterComponent } from "../footer/footer.component";
import { Moneytransfer1Component } from '../moneytransfer1/moneytransfer1.component';

@Component({
  selector: 'app-errorr',
  standalone: true,
  imports: [NavComponent, ErrorpageComponent, FooterComponent, Moneytransfer1Component],
  templateUrl: './errorr.component.html',
  styleUrl: './errorr.component.scss'
})
export class ErrorrComponent {

  // userName: string = 'Help';  
  // accountLinkText: string = 'help'

}
