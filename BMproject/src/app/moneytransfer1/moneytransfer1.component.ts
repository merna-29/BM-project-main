import { Component } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';
import { Nav2Component } from '../nav2/nav2.component';
import { MyprofileeComponent } from '../myprofilee/myprofilee.component';
import { StepOneMoneyComponent } from '../step-one-money/step-one-money.component';
import { ApplicationComponent } from '../application/application.component';
import { FooterComponent } from '../footer/footer.component';
import { ForumComponent } from '../forum/forum.component';

@Component({
  selector: 'app-moneytransfer1',
  standalone: true,
  imports: [CirclesComponent,Nav2Component,MyprofileeComponent,StepOneMoneyComponent,ApplicationComponent,FooterComponent,ForumComponent],
  templateUrl: './moneytransfer1.component.html',
  styleUrl: './moneytransfer1.component.scss'
})
export class Moneytransfer1Component {

}
