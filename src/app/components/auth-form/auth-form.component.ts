import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  activeTabIndex = 0; // 0 for register, 1 for login
  user = {email: '', login: '', password: ''};
  credentials = {login: '', password: ''};

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
  }

  register() {
    // Vérifie si tous les champs sont remplis
    if (this.user.email && this.user.login && this.user.password) {
      this.userService.register(this.user).subscribe(
        response => {
          console.log('User registered successfully:', response);
          // Ajoutez ici la logique pour gérer la réponse de l'inscription
          this.snackBar.open('Successful registration, you can login', 'Close', {
            duration: 3000,
          });

        },
        error => {
          console.error('Error registering user:', error);
          // Ajoutez ici la logique pour gérer les erreurs d'inscription
          //je voudrais switch automatiquement sur tab login
          // if (error.status === 400) {
          //   this.snackBar.open('Login or Email already used.', 'Close', {
          //     duration: 5000,
          //   });
          // }
          if (error.status === 400 && error.error) {
            this.snackBar.open(error.error, 'Close', {
              duration: 5000,
            });
          }

        }
      );
    } else {
      console.error('All fields (email, login, password) are required.');
      // Ajoutez ici la logique pour gérer le cas où les champs ne sont pas tous remplis
      this.snackBar.open('Please fill in all fields.', 'Close', {
        duration: 5000, // Durée pendant laquelle la notification est affichée (en millisecondes)

      });

    }
  }

  login() {
    this.userService.login(this.credentials).subscribe(response => {
      console.log('Login successful:', response);
      const userId = response.id;
      this.userService.setUserId(userId);
      this.router.navigate(['/users', userId]);
      },
      error => {

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
        // Ajoutez ici la logique pour gérer les erreurs d'inscription
    });
  }

}
