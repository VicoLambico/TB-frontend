import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManageHeroesService} from "../../../../services/manage/manage-heroes.service";
import {ManageCategoriesService} from "../../../../services/manage/manage-categories.service";
import {ManageCompetencesService} from "../../../../services/manage/manage-competences.service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit{
  heroForm!: FormGroup;
  categories: any[] = [];
  competences: any[] =[];
  selectedCategory: any | null = null;
  constructor(
    private fb: FormBuilder,
    private heroService: ManageHeroesService,
    private categoryService : ManageCategoriesService,
    private competenceService : ManageCompetencesService,
    private userService : UserService,
  ) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      heroName: ['', [Validators.required]],
      // Ajoutez d'autres champs du formulaire si nécessaire
      heroCategory: [null, [Validators.required]],
      competence: [null, [Validators.required]]
    });
    this.loadCategories();
    this.loadCompetence();
    this.watchCategoryChanges();
  }
  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
  loadCompetence(): void {
    this.competenceService.getAllCompetence().subscribe(
      (competence) => {
        this.competences = competence;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
  onSubmit(): void {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;

      const userIdString = this.userService.getUserId();
      const userId = Number(userIdString);

      this.heroService.createHero(newHero,userId).subscribe(
        (response) => {
          console.log('Hero created successfully:', response);
          // Réinitialisez le formulaire après la création
          this.heroForm.reset();
        },
        (error) => {
          console.error('Error creating hero:', error);
        }
      );
    }
  }
  watchCategoryChanges(): void {
    this.heroForm.get('heroCategory')?.valueChanges.subscribe(
      (selectedCategory) => {
        // Mettez à jour la variable selectedCategory en fonction des changements
        this.selectedCategory = selectedCategory.id;


        // Effectuez d'autres actions en fonction de la catégorie sélectionnée si nécessaire
        console.log('Selected Category (before submit):', this.selectedCategory);

      }
    );
  }
}
