import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageQuestsService {
  private apiURL = 'http://localhost:8081/api/quest';

  constructor(private http: HttpClient) {}

  createQuests(category: any): Observable<any> {
    return this.http.post(this.apiURL, category);
  }

  getAllQuests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  getQuestsById(questId: number): Observable<any> {
    const url = `${this.apiURL}/${questId}`;
    return this.http.get<any>(url);
  }

  deleteQuest(questId: number): Observable<void> {
    const url = `${this.apiURL}/${questId}`;
    return this.http.delete<void>(url);
  }

  patchQuest(questId: number, categoryUpdates: any): Observable<any> {
    const url = `${this.apiURL}/${questId}`;
    return this.http.patch(url, categoryUpdates);
  }
}
