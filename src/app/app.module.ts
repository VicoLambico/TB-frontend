import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/pages/manage/heroes-management/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { AuthFormComponent } from './components/pages/auth-form/auth-form.component';
import {HeaderComponent} from "./components/decorators/header/header.component";
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MenuComponent } from './components/decorators/menus/menu/menu.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { NotAuthComponent } from './components/decorators/not-auth/not-auth.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { DevMenuComponent } from './components/decorators/menus/dev-menu/dev-menu.component';
import { ManageAccountMenuComponent } from './components/decorators/menus/manage-account-menu/manage-account-menu.component';
import { NewHeroComponent } from './components/pages/game/new-hero/new-hero.component';
import { LaunchQuestComponent } from './components/pages/game/launch-quest/launch-quest.component';
import { MyHeroListComponent } from './components/pages/game/my-hero-list/my-hero-list.component';
import { QuestsComponent } from './components/pages/manage/quests-management/quests/quests.component';
import { CategoriesComponent } from './components/pages/manage/categories-management/categories/categories.component';
import { CompetencesComponent } from './components/pages/manage/competences-management/competences/competences.component';
import { CreateHeroesComponent } from './components/pages/manage/heroes-management/create-heroes/create-heroes.component';
import { AllHeroesComponent } from './components/pages/manage/heroes-management/all-heroes/all-heroes.component';
import { CreateCompetencesComponent } from './components/pages/manage/competences-management/create-competences/create-competences.component';
import { AllCompetencesComponent } from './components/pages/manage/competences-management/all-competences/all-competences.component';
import { CreateCategoriesComponent} from "./components/pages/manage/categories-management/create-categories/create-categories.component";
import { AllCategoriesComponent } from './components/pages/manage/categories-management/all-categories/all-categories.component';
import { CreateQuestsComponent } from './components/pages/manage/quests-management/create-quests/create-quests.component';
import { AllQuestsComponent } from './components/pages/manage/quests-management/all-quests/all-quests.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AuthFormComponent,
    HeaderComponent,
    UserPageComponent,
    MenuComponent,
    NotAuthComponent,
    DevMenuComponent,
    ManageAccountMenuComponent,
    NewHeroComponent,
    LaunchQuestComponent,
    MyHeroListComponent,
    QuestsComponent,
    CategoriesComponent,
    CompetencesComponent,
    CreateHeroesComponent,
    AllHeroesComponent,
    CreateCompetencesComponent,
    AllCompetencesComponent,
    CreateCategoriesComponent,
    AllCategoriesComponent,
    CreateQuestsComponent,
    AllQuestsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
