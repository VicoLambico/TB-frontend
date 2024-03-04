import { Component, OnInit } from '@angular/core';
import { ManageCompetencesService } from "../../../../../services/manage/manage-competences.service";
import { ManageCategoriesService } from "../../../../../services/manage/manage-categories.service";

@Component({
  selector: 'app-all-competences',
  templateUrl: './all-competences.component.html',
  styleUrls: ['./all-competences.component.css']
})
export class AllCompetencesComponent implements OnInit {
  competences: any[] = [];
  categories: any[] = [];
  editingCompetenceId: number | null = null;
  editedCompetenceName: string = '';
  editedCompetenceDescription: string = '';
  editedCompetenceDamage: number = 0;
  editedCompetenceCategory: number | null = null;

  constructor(private competencesService: ManageCompetencesService, private categoriesService: ManageCategoriesService) { }

  ngOnInit(): void {
    this.loadCompetences();
    this.loadCategories();

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
        // Stockez toutes les données de la catégorie
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  removeCompetence(competenceId: number): void {
    this.competencesService.deleteCompetence(competenceId).subscribe(
      () => {
        // Rechargez la liste des compétences après la suppression
        this.loadCompetences();
      },
      (error) => {
        console.error('Error removing competence:', error);
      }
    );
  }

  confirmRemoveCompetence(competenceId: number): void {
    const confirmation = window.confirm("Do you really want to delete the competence? The deletion will be permanent.");
    if (confirmation) {
      this.removeCompetence(competenceId);
    }
  }

  editCompetence(competence: any): void {
    // Activez le mode d'édition pour cette compétence
    this.editingCompetenceId = competence.id;

  }

  saveEditedCompetence(competenceId: number, competenceUpdates: any): void {
    this.competencesService.patchCompetence(competenceId, competenceUpdates).subscribe(
      (updatedCompetence) => {
        // Mettez à jour la liste des compétences après avoir appliqué les modifications
        this.loadCompetences();
        // Désactivez le mode d'édition après avoir sauvegardé les modifications
        this.editingCompetenceId = null;
        // Réinitialisez les propriétés éditées
        this.editedCompetenceName = '';
        this.editedCompetenceDescription = '';
        this.editedCompetenceDamage = 0;
        this.editedCompetenceCategory = null;
      },
      (error) => {
        console.error('Error updating competence:', error);
      }
    );
  }

  cancelCompetenceEdit(): void {
    // Désactivez le mode d'édition sans sauvegarder les modifications
    this.editingCompetenceId = null;
    // Réinitialisez les propriétés éditées
    this.editedCompetenceName = '';
    this.editedCompetenceDescription = '';
    this.editedCompetenceDamage = 0;
    this.editedCompetenceCategory = null;
  }


}
