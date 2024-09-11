import { Component } from '@angular/core';
import { Nav2Component } from '../nav2/nav2.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApplicationComponent } from '../application/application.component';
import { MyprofleComponent } from '../myprofle/myprofle.component';

@Component({
  selector: 'app-account1',
  standalone: true,
  imports: [Nav2Component,FooterComponent,SidebarComponent,ApplicationComponent,MyprofleComponent],
  templateUrl: './account1.component.html',
  styleUrl: './account1.component.scss'
})
export class Account1Component {

}
