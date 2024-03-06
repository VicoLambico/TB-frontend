import { Injectable } from '@angular/core';
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
  private _admin : boolean = false;
  constructor(private http: HttpClient, private router: Router) { }


  get admin(): boolean {
    return this._admin;
  }

  set admin(value: boolean) {
    this._admin = value;
  }

  getUserId(): string | null {
    return this.userId;
  }
  setUserId(userId: string): void {
    this.userId = userId;
  }
  setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
  }
  getUserData(): Observable<any> {
    if (this.userId) {
      const url = `${this.apiURL}/user/${this.userId}`;
      return this.http.get(url);
    } else {
      // Gérez le cas où l'ID de l'utilisateur actuel n'est pas défini
      return throwError('Current user ID is not set.');
    }
  }



  // Nouvelle méthode pour stocker le login
  getUserLogin(userId: string): Observable<string> {
    const url = `${this.apiURL}/user/${userId}`;
    return this.http.get<any>(url).pipe(
      map(response => response.login)
    );
  }
  register(user: any): Observable<any>{
    return this.http.post(`${this.apiURL}/user`, user);
  }
  login(credentials: { login: string, password: string }): Observable<any> {
    // this.isLoggedIn = true;
    return this.http.post(`${this.apiURL}/login`, credentials);
  }
  logout(): Observable<string> {
    this.isLoggedIn = false;
    this.userId = null;
    this.router.navigate(['/login']);
    return this.http.post<string>(`${this.apiURL}/logout`, {});
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
