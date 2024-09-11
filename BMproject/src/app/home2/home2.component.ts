import { Component,Input } from '@angular/core';
import { ForumComponent } from '../forum/forum.component';
import { ApplicationComponent } from '../application/application.component';
import { StartComponent } from '../start/start.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { Forum2Component } from '../forum2/forum2.component';
import { Nav2Component } from '../nav2/nav2.component';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [StartComponent,ApplicationComponent,ForumComponent,NavComponent,FooterComponent,Forum2Component,Nav2Component],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component {
  @Input() button: string = 'Create an account';
}
