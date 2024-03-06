import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth.component.html',
  styleUrls: ['./not-auth.component.css'],
})
export class NotAuthComponent {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated() || this.router.url == '/login';
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }
}
