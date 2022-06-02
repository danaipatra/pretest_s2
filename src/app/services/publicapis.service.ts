import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicapisService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<{count: number, categories: string[]}> {
    return this.http.get<{count: number, categories: string[]}>(`https://api.publicapis.org/categories`);
  }
}
