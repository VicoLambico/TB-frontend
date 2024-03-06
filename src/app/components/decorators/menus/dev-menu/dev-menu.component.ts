import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-dev-menu',
  templateUrl: './dev-menu.component.html',
  styleUrls: ['./dev-menu.component.css']
})
export class DevMenuComponent {

  constructor(
    private router: Router,
    private userService: UserService) {}

  isSecondaryMenuOpen: boolean = false;

  isAdmin():boolean{
    return this.userService.admin;
  }

  toggleSecondaryMenu() {
    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
  }

  manageHeroes() {
    this.router.navigate(['/manage-heroes']);
  }

  manageQuests() {
    // Logique pour créer un héros
    this.router.navigate(['/manage-quests']);
  }

  manageCompetences() {
    // Logique pour créer un héros
    this.router.navigate(['/manage-competences']);
  }

  manageCategories() {
    // Logique pour créer un héros
    this.router.navigate(['/manage-categories']);
  }

}
