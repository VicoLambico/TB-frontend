import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManageHeroesService} from "../../../../../services/manage/manage-heroes.service";
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrls: ['./create-heroes.component.css']
})
export class CreateHeroesComponent implements OnInit{
  heroForm!: FormGroup;

  constructor(private fb: FormBuilder, private heroService: ManageHeroesService) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      heroName: ['', [Validators.required]],
      level: [0, [Validators.required, Validators.min(1)]],
      lp: [0, [Validators.required, Validators.min(1)]],
      dps: [0, [Validators.required, Validators.min(1)]],
      energy: [0, [Validators.required, Validators.min(1)]],
      // Ajoutez d'autres champs du formulaire si nécessaire
    });
  }

  onSubmit(): void {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;
      this.heroService.createHero(newHero).subscribe(
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

}
