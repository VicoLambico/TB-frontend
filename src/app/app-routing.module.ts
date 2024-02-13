import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthFormComponent} from "./components/auth-form/auth-form.component";
import {UserPageComponent} from "./components/user-page/user-page.component";

const routes: Routes = [
  { path: 'login', component: AuthFormComponent },
  // Ajoutez d'autres routes au besoin
  { path: 'users/:userId', component: UserPageComponent },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Redirige la route par défaut vers /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
