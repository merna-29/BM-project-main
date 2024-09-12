import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstpageloginComponent } from '../loginandregistration/firstpagelogin/firstpagelogin.component';
import { SpeedotransferloginComponent } from '../speedotransferlogin/speedotransferlogin.component';
import { TopPageOneLoginComponent } from '../top-page-one-login/top-page-one-login.component';
import { Footer2Component } from '../footer2/footer2.component';


@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [FirstpageloginComponent, SpeedotransferloginComponent, TopPageOneLoginComponent, Footer2Component],
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {
  private timer: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startTimer(); // Start the timer when the component initializes
  }

  startTimer() {
    // Set a timer for 2 minutes (120,000 milliseconds)
    this.timer = setTimeout(() => {
      this.redirectToAnotherPage();
    }, 6000);
  }

  onLoginClickFromChild() {
    // Stop the timer if the login button is clicked
    clearTimeout(this.timer);
    // Handle any additional logic here, such as authentication
  }

  redirectToAnotherPage() {
    // Redirect the user to another page
    this.router.navigate(['/logout']); // Replace with the desired route
  }
}
