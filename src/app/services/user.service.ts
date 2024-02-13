import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8081/api";
  private userId: string | null = null;
  private userLogin: string | null = null; // Ajout du logi
  constructor(private http: HttpClient) { }

  getUserId(): string | null {
    return this.userId;
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }
  getUserData(userId: string): Observable<any> {
    const url = `${this.apiURL}/user/${userId}`;
    return this.http.get(url);
  }
  // Nouvelle méthode pour stocker le login

  register(user: any): Observable<any>{
    return this.http.post(`${this.apiURL}/user`, user);
  }
  login(credentials: { login: string, password: string }): Observable<any> {

    return this.http.post(`${this.apiURL}/login`, credentials);

  }
}
