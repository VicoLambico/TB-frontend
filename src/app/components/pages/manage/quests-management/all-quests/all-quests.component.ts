import { Component, OnInit } from '@angular/core';
import { ManageQuestsService } from "../../../../../services/manage/manage-quests.service";

@Component({
  selector: 'app-all-quests',
  templateUrl: './all-quests.component.html',
  styleUrls: ['./all-quests.component.css']
})
export class AllQuestsComponent implements OnInit {
  quests: any[] = [];
  editingQuestId: number | null = null;
  editedQuestName: string = '';
  editedQuestLevel: number = 0;
  editedQuestLp: number = 0;
  editedQuestDps: number = 0;
  editedQuestDescription: string = '';

  constructor(private questsService: ManageQuestsService) { }

  ngOnInit(): void {
    this.loadQuests();
  }

  loadQuests(): void {
    this.questsService.getAllQuests().subscribe(
      (quests) => {
        this.quests = quests;
      },
      (error) => {
        console.error('Error loading quests:', error);
      }
    );
  }

  removeQuest(questId: number): void {
    this.questsService.deleteQuest(questId).subscribe(
      () => {
        // Rechargez la liste des quêtes après la suppression
        this.loadQuests();
      },
      (error) => {
        console.error('Error removing quest:', error);
      }
    );
  }

  confirmRemoveQuest(questId: number): void {
    const confirmation = window.confirm("Do you really want to delete the quest? The deletion will be permanent.");
    if (confirmation) {
      this.removeQuest(questId);
    }
  }

  editQuest(quest: any): void {
    // Activez le mode d'édition pour cette quête
    this.editingQuestId = quest.id;
    this.editedQuestName = quest.questName;
    this.editedQuestLevel = quest.questLevel;
    this.editedQuestLp = quest.lp;
    this.editedQuestDps = quest.dps;
    this.editedQuestDescription = quest.description;
  }

  saveEditedQuest(questId: number, questUpdates: any): void {
    this.questsService.patchQuest(questId, questUpdates).subscribe(
      (updatedQuest) => {
        // Mettez à jour la liste des quêtes après avoir appliqué les modifications
        this.loadQuests();
        // Désactivez le mode d'édition après avoir sauvegardé les modifications
        this.editingQuestId = null;
      },
      (error) => {
        console.error('Error updating quest:', error);
      }
    );
  }

  cancelEdit(): void {
    // Désactivez le mode d'édition sans sauvegarder les modifications
    this.editingQuestId = null;
  }
}
