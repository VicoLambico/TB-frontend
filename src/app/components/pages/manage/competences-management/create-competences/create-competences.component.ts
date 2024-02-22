import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManageCategoriesService} from "../../../../../services/manage/manage-categories.service";
import {ManageCompetencesService} from "../../../../../services/manage/manage-competences.service";

@Component({
  selector: 'app-create-competences',
  templateUrl: './create-competences.component.html',
  styleUrls: ['./create-competences.component.css']
})
export class CreateCompetencesComponent implements OnInit{
  competenceForm!: FormGroup;
  categories: any[] = [];
  constructor(private fb: FormBuilder, private competencesService: ManageCompetencesService, private categoryService : ManageCategoriesService) {}

  ngOnInit(): void {
    this.competenceForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      damage: [0, [Validators.required, Validators.min(1)]],
      competenceCategory: [null, [Validators.required]]
    });
    this.loadCategories();
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
  onSubmit(): void {
    if (this.competenceForm.valid) {
      const newCompetence = this.competenceForm.value;
      this.competencesService.createCompetence(newCompetence).subscribe(
        (response) => {
          console.log('Category created successfully:', response);
          // Réinitialisez le formulaire après la création
          this.competenceForm.reset();
        },
        (error) => {
          console.error('Error creating category:', error);
        }
      );
    }
  }
}
