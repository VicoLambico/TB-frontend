import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EMPTY, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8081/api";
  private userId: string | null = null;
  private isLoggedIn: boolean = false;
  private _admin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  get admin(): boolean {
    return this._admin;
  }

  set admin(value: boolean) {
    this._admin = value;
  }

  // Obtient l'ID de l'utilisateur actuellement connecté
  getUserId(): string | null {
    return this.userId;
  }

  // Définit l'ID de l'utilisateur actuellement connecté
  setUserId(userId: string): void {
    this.userId = userId;
  }

  // Définit l'état de connexion de l'utilisateur
  setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
  }

  // Obtient les données de l'utilisateur actuellement connecté depuis le backend
  getUserData(): Observable<any> {
    if (this.userId) {
      const url = `${this.apiURL}/user/${this.userId}`;
      return this.http.get(url);
    } else {
      // Gérez le cas où l'ID de l'utilisateur actuel n'est pas défini
      return throwError('Current user ID is not set.');
    }
  }

  // Obtient le login de l'utilisateur à partir de son ID
  getUserLogin(userId: string): Observable<string> {
    const url = `${this.apiURL}/user/${userId}`;
    return this.http.get<any>(url).pipe(
      map(response => response.login)
    );
  }

  // Enregistre un nouvel utilisateur
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiURL}/user`, user);
  }

  // Effectue la connexion de l'utilisateur
  login(credentials: { login: string, password: string }): Observable<any> {
    // this.isLoggedIn = true;
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  // Déconnecte l'utilisateur
  logout(): Observable<string> {
    this.isLoggedIn = false;
    this.userId = null;
    this.router.navigate(['/login']);
    return this.http.post<string>(`${this.apiURL}/logout`, {});
  }

  // Vérifie si l'utilisateur est actuellement authentifié
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
