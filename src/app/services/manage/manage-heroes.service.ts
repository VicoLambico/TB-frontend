import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManageHeroesService {
  private apiURL = 'http://localhost:8081/api/heroes';

  constructor(private http: HttpClient) {}

  createHero(hero: any): Observable<any> {
    return this.http.post(this.apiURL, hero);
  }
  getAllHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  deleteHero(heroId: number): Observable<void> {
    const url = `${this.apiURL}/${heroId}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        console.error('Error deleting hero:', error);
        console.log('Response:', error.status, error.error);
        throw error;
      })
    );
  }


  patchHero(heroId: number, heroUpdates: any): Observable<any> {
    const url = `${this.apiURL}/${heroId}`;
    return this.http.patch(url, heroUpdates);
  }

}
