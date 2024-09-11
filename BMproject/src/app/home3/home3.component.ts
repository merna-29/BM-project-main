import { Component } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { ForumComponent } from '../forum/forum.component';
import { ApplicationComponent } from '../application/application.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home3',
  standalone: true,
  imports: [StartComponent,ForumComponent,ApplicationComponent,NavComponent,FooterComponent],
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.scss'
})
export class Home3Component {

}
