import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManageHeroesService} from "../../../../../services/manage/manage-heroes.service";
import {ManageQuestsService} from "../../../../../services/manage/manage-quests.service";

@Component({
  selector: 'app-create-quests',
  templateUrl: './create-quests.component.html',
  styleUrls: ['./create-quests.component.css']
})
export class CreateQuestsComponent implements OnInit{
  questForm!: FormGroup;

  constructor(private fb: FormBuilder, private questsService: ManageQuestsService) {}

  ngOnInit(): void {
    this.questForm = this.fb.group({
      questName: ['', [Validators.required]],
      questLevel: [0, [Validators.required, Validators.min(1)]],
      lp: [0, [Validators.required, Validators.min(1)]],
      dps: [0, [Validators.required, Validators.min(1)]],
      description: ["", [Validators.required]],
      // ... autres champs du formulaire ...
    });
  }

  onSubmit(): void {
    if (this.questForm.valid) {
      const newQuests = this.questForm.value;
      this.questsService.createQuests(newQuests).subscribe(
        (response) => {
          console.log('Hero created successfully:', response);
          // Réinitialisez le formulaire après la création
          this.questForm.reset();
        },
        (error) => {
          console.error('Error creating hero:', error);
        }
      );
    }
  }
}
