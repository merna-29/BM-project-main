import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  // constructor(private router: Router) {}

  // navigateTo(path: string) {
  //   this.router.navigateTo(/login1');
  //   // this.navigateTo
  // }
}
