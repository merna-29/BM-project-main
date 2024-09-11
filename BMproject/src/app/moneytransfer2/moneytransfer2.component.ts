import { Component } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';
import { Nav2Component } from '../nav2/nav2.component';
import { MyprofileeComponent } from '../myprofilee/myprofilee.component';
import { ApplicationComponent } from '../application/application.component';
import { FooterComponent } from '../footer/footer.component';
import { ForumComponent } from '../forum/forum.component';
import { TesttComponent } from '../testt/testt.component';

@Component({
  selector: 'app-moneytransfer2',
  standalone: true,
  imports: [CirclesComponent,Nav2Component,MyprofileeComponent,TesttComponent,ApplicationComponent,FooterComponent,ForumComponent],
  templateUrl: './moneytransfer2.component.html',
  styleUrl: './moneytransfer2.component.scss'
})
export class Moneytransfer2Component {

}
