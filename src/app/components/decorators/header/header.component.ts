import {Component, Input} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() logoSrc!: string;
  constructor(private userService: UserService, private router: Router) {

  }
  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }
  getDestination(): string[] {
    // Si l'utilisateur est authentifié, renvoyer à la page d'accueil, sinon renvoyer à la page de connexion
    return this.userService.isAuthenticated() ? ['/user'] : ['/login'];
  }
  navigateToPage(): void {
    this.router.navigate(this.getDestination());
  }
}
