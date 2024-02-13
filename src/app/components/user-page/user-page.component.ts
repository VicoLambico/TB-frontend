import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  userId: string | null = null;
  userData: any; // Remplacez "any" par le type réel de vos données utilisateur
  userLogin: string | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur à partir de l'URL
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      // this.userId = this.userService.getUserId();
      // Charger les informations de l'utilisateur à partir du service utilisateur
      if (this.userId) {
        this.userService.getUserData(this.userId).subscribe(data => {
          this.userData = data;
        });
      }
    });
  }
}
