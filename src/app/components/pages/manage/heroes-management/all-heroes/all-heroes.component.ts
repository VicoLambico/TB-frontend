import {Component, OnInit} from '@angular/core';
import {ManageHeroesService} from "../../../../../services/manage/manage-heroes.service";

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit{

  heroes: any[] = [];
  editingHeroId: number | null = null;
  editedHeroName: string = '';
  editedHeroLvl: number = 0;
  editedHeroLp: number = 0;
  editedHeroDps: number = 0;
  editedHeroEnergy: number = 0;
  constructor(private heroService: ManageHeroesService) { }

  ngOnInit(): void {
    this.loadHeroes();
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


  editHero(hero: any): void {
    // Activez le mode d'édition pour ce héros
    this.editingHeroId = hero.id;
  }

  saveEditedHero(heroId: number, heroUpdates: any): void {
    this.heroService.patchHero(heroId, heroUpdates).subscribe(
      (updatedHero) => {
        // Mettez à jour la liste des héros après avoir appliqué les modifications
        this.loadHeroes();
        // Désactivez le mode d'édition après avoir sauvegardé les modifications
        this.editingHeroId = null;
      },
      (error) => {
        console.error('Error updating hero:', error);
      }
    );
  }

  cancelEdit(): void {
    // Désactivez le mode d'édition sans sauvegarder les modifications
    this.editingHeroId = null;
  }

}
