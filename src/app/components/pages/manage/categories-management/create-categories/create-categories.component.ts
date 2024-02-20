import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageCategoriesService } from "../../../../../services/manage/manage-categories.service";

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: ManageCategoriesService) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // Ajoutez d'autres champs du formulaire si nécessaire
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;
      this.categoryService.createCategory(newCategory).subscribe(
        (response) => {
          console.log('Category created successfully:', response);
          // Réinitialisez le formulaire après la création
          this.categoryForm.reset();
        },
        (error) => {
          console.error('Error creating category:', error);
        }
      );
    }
  }
}
