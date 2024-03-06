import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ManageCategoriesService} from "../../../services/manage/manage-categories.service";
import {ManageCompetencesService} from "../../../services/manage/manage-competences.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  userId: string | null = null;
  userLogin: any; // Remplacez "any" par le type réel de vos données utilisateur
  categories: any[] = [];
  competences: any[] = [];


  constructor(private userService: UserService,
              private categoriesService: ManageCategoriesService,
              private competencesService: ManageCompetencesService,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur à partir de l'URL
    this.userService.getUserData().subscribe(data => {
      this.userId = this.userService.getUserId();
      // Charger les informations de l'utilisateur à partir du service utilisateur
      if (this.userId) {
        this.userService.getUserLogin(this.userId).subscribe(data => {
          this.userLogin = data;
        });
      }
    });
    this.loadCategories()
    this.loadCompetences()
  }

  loadCompetences(): void {
    this.competencesService.getAllCompetence().subscribe(
      (competences) => {
        // Stockez toutes les données de la compétence
        this.competences = competences;
      },
      (error) => {
        console.error('Error loading competences:', error);
      }
    );
  }

  loadCategories(): void {
    this.categoriesService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  isUserRoute(): boolean {
    return this.router.url === '/user';
  }
}
