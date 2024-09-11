import { Component } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';
import { Nav2Component } from '../nav2/nav2.component';
import { TesttComponent } from '../testt/testt.component';
import { ApplicationComponent } from '../application/application.component';
import { FooterComponent } from '../footer/footer.component';
import { ForumComponent } from '../forum/forum.component';

@Component({
  selector: 'app-moneytransfer3',
  standalone: true,
  imports: [CirclesComponent,Nav2Component,TesttComponent,ApplicationComponent,FooterComponent,ForumComponent],
  templateUrl: './moneytransfer3.component.html',
  styleUrl: './moneytransfer3.component.scss'
})
export class Moneytransfer3Component {

}
