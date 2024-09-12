import { Component } from '@angular/core';
import { HelppageComponent } from "../helppage/helppage.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { Moneytransfer1Component } from '../moneytransfer1/moneytransfer1.component';

@Component({
  selector: 'app-helpp',
  standalone: true,
  imports: [HelppageComponent, NavComponent, Moneytransfer1Component, FooterComponent], 
  templateUrl: './helpp.component.html',
  styleUrls: ['./helpp.component.scss']
})
export class HelppComponent {
  // userName: string = 'Help';  
  // accountLinkText: string = 'help'
}
