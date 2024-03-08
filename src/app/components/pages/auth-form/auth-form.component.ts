import {Component, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTabGroup} from "@angular/material/tabs";


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup; // Ajoutez cette ligne

  user = {email: '', login: '', password: ''};
  credentials = {login: '', password: ''};


  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) {}

  register() {
    // Vérifie si tous les champs sont remplis
    if (this.user.email && this.user.login && this.user.password) {
      this.userService.register(this.user).subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.snackBar.open('Successful registration, you can login', 'Close', {
            duration: 3000,
          });
          // Change l'onglet actif à l'onglet de connexion après une inscription réussie
          this.tabGroup.selectedIndex = 0;

        },
        error => {
          console.error('Error registering user:', error);
          // Gère les erreurs lors de l'inscription
          if (error.status === 400 && error.error) {
            this.snackBar.open(error.error, 'Close', {
              duration: 9000,
            });
          }

        }
      );
    } else {
      console.error('All fields (email, login, password) are required.');
      this.snackBar.open('Please fill in all fields.', 'Close', {
        duration: 5000,
      });

    }
  }

  login() {
    this.userService.login(this.credentials).subscribe(response => {
        console.log('Login successful:', response);
        const userId = response.id;
        // Définir le statut administrateur et l'ID de l'utilisateur connecté
        this.userService.admin = response.admin;
        this.userService.setUserId(userId);
        this.userService.setLoggedIn(true);
        // Redirige vers la page utilisateur après une connexion réussie
        this.router.navigate(['/user']);
      },
      error => {
        // Gère les erreurs de connexion
        console.error('Error login user:', error);
        if (error.status === 401) {
          // Utilisateur non trouvé dans la base de données
          this.snackBar.open('Incorrect login or password.', 'Close', {
            duration: 5000,
          });
        } else {
          // Autre erreur de connexion
          this.snackBar.open('An error has occurred during connection.', 'Close', {
            duration: 5000,
          });
        }
      });
  }
}
