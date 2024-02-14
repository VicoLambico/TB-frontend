import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EMPTY, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8081/api";
  private userId: string | null = null;

  constructor(private http: HttpClient) { }

  getUserId(): string | null {
    return this.userId;
  }

  setUserId(userId: string): void {
    this.userId = userId;
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

    return this.http.post(`${this.apiURL}/login`, credentials);

  }
}
