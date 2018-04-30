import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private url: string = 'http://localhost:3000/todos'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url, this.options)
  }

  public addTodo(todo) {
    return this.http.post(this.url, todo);
  }
}
