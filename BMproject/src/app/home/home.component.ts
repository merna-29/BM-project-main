import { Component } from '@angular/core';
import { start } from 'repl';
import { StartComponent } from '../start/start.component';
import { ApplicationComponent } from '../application/application.component';
import { ForumComponent } from '../forum/forum.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StartComponent,ApplicationComponent,ForumComponent,NavComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
