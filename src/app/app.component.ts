import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-route';

  constructor(
    private router: Router
  ) {}

  nav() {

    this.router.navigate(['first'], {
      queryParams: {
        value1: 111,
        value2: 222,
        value3: 333
      }
    })
  }
}
