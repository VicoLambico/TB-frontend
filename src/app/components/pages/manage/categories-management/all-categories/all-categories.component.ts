import { Component, OnInit } from '@angular/core';
import { ManageHeroesService } from "../../../../../services/manage/manage-heroes.service";
import {ManageCategoriesService} from "../../../../../services/manage/manage-categories.service";

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categories: any[] = [];
  editingCategoryId: number | null = null;
  editedCategoryName: string = '';
  editedCategoryDescription: string = '';

  constructor(private categoriesService: ManageCategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
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

  removeCategory(categoryId: number): void {
    this.categoriesService.deleteCategory(categoryId).subscribe(
      () => {
        // Rechargez la liste des catégories après la suppression
        this.loadCategories();
      },
      (error) => {
        console.error('Error removing category:', error);
      }
    );
  }

  confirmRemoveCategory(categoryId: number): void {
    const confirmation = window.confirm("Do you really want to delete the category? The deletion will be permanent.");
    if (confirmation) {
      this.removeCategory(categoryId);
    }
  }

  editCategory(category: any): void {
    // Activez le mode d'édition pour cette catégorie
    this.editingCategoryId = category.id;
  }

  saveEditedCategory(categoryId: number, categoryUpdates: any): void {
    this.categoriesService.patchCategory(categoryId, categoryUpdates).subscribe(
      (updatedCategory) => {
        // Mettez à jour la liste des catégories après avoir appliqué les modifications
        this.loadCategories();
        // Désactivez le mode d'édition après avoir sauvegardé les modifications
        this.editingCategoryId = null;
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }

  cancelCategoryEdit(): void {
    // Désactivez le mode d'édition sans sauvegarder les modifications
    this.editingCategoryId = null;
  }
}
