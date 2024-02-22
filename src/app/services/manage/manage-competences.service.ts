import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageCompetencesService {
  private apiURL = 'http://localhost:8081/api/competence';

  constructor(private http: HttpClient) {}

  createCompetence(category: any): Observable<any> {
    return this.http.post(this.apiURL, category);
  }

  getAllCompetence(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  getCompetencesById(competenceId: number): Observable<any> {
    const url = `${this.apiURL}/${competenceId}`;
    return this.http.get<any>(url);
  }

  deleteCompetence(competenceId: number): Observable<void> {
    const url = `${this.apiURL}/${competenceId}`;
    return this.http.delete<void>(url);
  }

  patchCompetence(competenceId: number, categoryUpdates: any): Observable<any> {
    const url = `${this.apiURL}/${competenceId}`;
    return this.http.patch(url, categoryUpdates);
  }
}
