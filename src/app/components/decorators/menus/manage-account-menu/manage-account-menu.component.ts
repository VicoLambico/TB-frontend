import { Component } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-account-menu',
  templateUrl: './manage-account-menu.component.html',
  styleUrls: ['./manage-account-menu.component.css']
})
export class ManageAccountMenuComponent {
  constructor(private userService: UserService, private router: Router) {
  }

  goHome() {
    this.router.navigate(['/user']);
  }


  logout(): void {
    this.userService.logout().subscribe(
      response => {
        this.userService.setLoggedIn(false);
        console.log('Logout successful:', response);
        // Traitez ici la réponse de la déconnexion
      },
      error => {
        if (error.status === 200) {
          console.log('Logout successful:');
        } else {
          console.error('Error during logout:', error);
          // Traitez ici les erreurs de déconnexion
        }

      }
    );
  }
}
