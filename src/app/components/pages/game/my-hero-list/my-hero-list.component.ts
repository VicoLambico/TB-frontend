import {Component, OnInit} from '@angular/core';
import {ManageHeroesService} from "../../../../services/manage/manage-heroes.service";
import {ManageCategoriesService} from "../../../../services/manage/manage-categories.service";

@Component({
  selector: 'app-my-hero-list',
  templateUrl: './my-hero-list.component.html',
  styleUrls: ['./my-hero-list.component.css']
})
export class MyHeroListComponent implements OnInit{
  heroes: any[] = [];
  editingHeroId: number | null = null;
  editedHeroName: string = '';
  categories: any[] = [];

  constructor(
    private heroService: ManageHeroesService,
    private categoriesService: ManageCategoriesService
  ) { }

  ngOnInit(): void {
    this.loadHeroes();
    this.loadCategories();
  }

  loadHeroes(): void {
    this.heroService.getAllHeroes().subscribe(
      (heroes) => {
        this.heroes = heroes;
      },
      (error) => {
        console.error('Error loading heroes:', error);
      }
    );
  }
  loadCategories(): void {
    this.categoriesService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading heroes:', error);
      }
    );
  }

  removeHero(heroId: number): void {
    this.heroService.deleteHero(heroId).subscribe(
      () => {
        // Rechargez la liste des héros après la suppression
        this.loadHeroes();
      },
      (error) => {
        console.error('Error removing hero:', error);
      }
    );
  }
  confirmRemoveHero(heroId: number): void {
    const confirmation = window.confirm("Do you really want to delete the hero? The deletion will be permanent.");
    if (confirmation) {
      this.removeHero(heroId);
    }
  }

}
