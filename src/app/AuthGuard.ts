// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from "./services/user.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
      // Utilisateur connecté, ne pas permettre l'accès à la page de connexion
      this.router.navigate(['/user']); // Rediriger vers la page d'accueil ou une autre page
      return false;
    }
    return true;
  }
}
