import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoriesService {
  private apiURL = 'http://localhost:8081/api/category';

  constructor(private http: HttpClient) {}

  createCategory(category: any): Observable<any> {
    return this.http.post(this.apiURL, category);
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  getCategoryById(categoryId: number): Observable<any> {
    const url = `${this.apiURL}/${categoryId}`;
    return this.http.get<any>(url);
  }

  deleteCategory(categoryId: number): Observable<void> {
    const url = `${this.apiURL}/${categoryId}`;
    return this.http.delete<void>(url);
  }

  patchCategory(categoryId: number, categoryUpdates: any): Observable<any> {
    const url = `${this.apiURL}/${categoryId}`;
    return this.http.patch(url, categoryUpdates);
  }
}
