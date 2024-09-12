import { Component } from '@angular/core';
import { Nav2Component } from '../nav2/nav2.component';
import { FooterComponent } from '../footer/footer.component';
import { ApplicationComponent } from '../application/application.component';
import { SettingsComponent } from '../settings/settings.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account4',
  standalone: true,
  imports: [Nav2Component,FooterComponent,ApplicationComponent,ChangePasswordComponent,SidebarComponent,RouterLink],
  templateUrl: './account4.component.html',
  styleUrl: './account4.component.scss'
})
export class Account4Component {

}
