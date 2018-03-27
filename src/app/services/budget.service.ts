import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BudgetService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  //
  // getAll(): Observable<any> {
  //   return this.http.get(this.url + 'budgets')
  //     .map(response => response.json());
  // }

  getCategories(): Observable<any> {
    return this.http.get(this.url + '/category');
  }

  getBudgets(): Observable<any> {
    return this.http.get(this.url + '/budget');
  }
}
