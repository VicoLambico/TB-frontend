import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthFormComponent} from "./components/pages/auth-form/auth-form.component";
import {HeroComponent} from "./components/pages/manage/heroes-management/hero/hero.component";
import {AuthGuard} from "./AuthGuard";
import {MenuComponent} from "./components/decorators/menus/menu/menu.component";
import {NewHeroComponent} from "./components/pages/game/new-hero/new-hero.component";
import {MyHeroListComponent} from "./components/pages/game/my-hero-list/my-hero-list.component";
import {LaunchQuestComponent} from "./components/pages/game/launch-quest/launch-quest.component";
import {QuestsComponent} from "./components/pages/manage/quests-management/quests/quests.component";
import {CompetencesComponent} from "./components/pages/manage/competences-management/competences/competences.component";
import {CategoriesComponent} from "./components/pages/manage/categories-management/categories/categories.component";
import {CreateHeroesComponent} from "./components/pages/manage/heroes-management/create-heroes/create-heroes.component";
import {AllHeroesComponent} from "./components/pages/manage/heroes-management/all-heroes/all-heroes.component";
import {
  CreateCompetencesComponent
} from "./components/pages/manage/competences-management/create-competences/create-competences.component";
import {
  AllCompetencesComponent
} from "./components/pages/manage/competences-management/all-competences/all-competences.component";
import {CreateQuestsComponent} from "./components/pages/manage/quests-management/create-quests/create-quests.component";
import {AllQuestsComponent} from "./components/pages/manage/quests-management/all-quests/all-quests.component";
import {
  CreateCategoriesComponent
} from "./components/pages/manage/categories-management/create-categories/create-categories.component";
import {
  AllCategoriesComponent
} from "./components/pages/manage/categories-management/all-categories/all-categories.component";

const routes: Routes = [
  {path: 'login', component: AuthFormComponent, canActivate: [AuthGuard]},


  {
    path: 'manage-heroes', component: HeroComponent, children: [

      {path: 'create', component: CreateHeroesComponent},

      {path: 'edit', component: AllHeroesComponent},


    ]
  },

  {
    path: 'manage-competences', component: CompetencesComponent, children: [

      {path: 'create', component: CreateCompetencesComponent},

      {path: 'edit', component: AllCompetencesComponent},

    ]
  },

  {
    path: 'manage-quests', component: QuestsComponent, children: [

      {path: 'create', component: CreateQuestsComponent},

      {path: 'edit', component: AllQuestsComponent},

    ]
  },

  {
    path: 'manage-categories', component: CategoriesComponent, children: [

      {path: 'create', component: CreateCategoriesComponent},

      {path: 'edit', component: AllCategoriesComponent},

    ]
  },

  {
    path: 'user', component: MenuComponent, children: [

      {path: 'new-hero', component: NewHeroComponent},

      {path: 'my-hero-list', component: MyHeroListComponent},

      {path: 'launch-quest', component: LaunchQuestComponent},

    ]
  },


  {path: '**', redirectTo: '/login', pathMatch: 'full'}, // Redirige la route par défaut vers /login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
