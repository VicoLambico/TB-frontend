import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth.component.html',
  styleUrls: ['./not-auth.component.css'],
})
export class NotAuthComponent {
  constructor(private router: Router) {}

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }
}
