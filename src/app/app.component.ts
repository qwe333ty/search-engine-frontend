import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-engine-frontend';

  constructor(private router: Router) {}

  routeToSearch() {
    this.router.navigate(['/article/search']);
  }

  routeToCreate() {
    this.router.navigate(['article/create'])
  }
}
