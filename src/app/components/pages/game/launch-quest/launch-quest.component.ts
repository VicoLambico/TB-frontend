import { Component } from '@angular/core';
import {ManageQuestsService} from "../../../../services/manage/manage-quests.service";

@Component({
  selector: 'app-launch-quest',
  templateUrl: './launch-quest.component.html',
  styleUrls: ['./launch-quest.component.css']
})
export class LaunchQuestComponent {
  quests: any[] = [];

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

  launchQuest(quest: any): void {
    // Implement the logic to handle quest launching
    console.log(`Launching quest: ${quest.questName}`);
    // Add your specific logic here, for example, navigate to a new component or perform an action.
  }
}
