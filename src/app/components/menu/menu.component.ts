import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isMainMenuOpen = false;
  isSecondaryMenuOpen: boolean = false;
  toggleMainMenu() {
    this.isMainMenuOpen = !this.isMainMenuOpen;
  }
  toggleSecondaryMenu() {
    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
  }
  createHero() {
    // Logique pour créer un héros
    console.log('Créer un héros');
  }

  createQuest() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }
  createCategory() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }
  createCompetence() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }
  DeleteCategory() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }
  DeleteCompetence() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }
  DeleteHero() {
    // Logique pour créer un héros
    console.log('Créer un héros');
  }

  DeleteQuest() {
    // Logique pour créer une quête
    console.log('Créer une quête');
  }


  ChooseHero() {
    // Logique pour créer un héros
    console.log('Créer un héros');
  }

  LaunchQuest() {
    // Logique pour créer un héros
    console.log('Créer un héros');
  }
  ListHero() {
    // Logique pour créer un héros
    console.log('Créer un héros');
  }

  protected readonly menubar = menubar;


  protected readonly UserService = UserService;
}
