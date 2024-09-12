import { Component } from '@angular/core';
import { Nav2Component } from '../nav2/nav2.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SettingsComponent } from '../settings/settings.component';
import { ApplicationComponent } from '../application/application.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account3',
  standalone: true,
  imports: [Nav2Component,FooterComponent,SidebarComponent,SettingsComponent,ApplicationComponent,RouterLink],
  templateUrl: './account3.component.html',
  styleUrl: './account3.component.scss'
})
export class Account3Component {

}
