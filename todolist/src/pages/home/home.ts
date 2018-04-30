import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private todos: Array<any> = [];

  keywords = '';

  todo = {
    title: ''
  };

  constructor(public restProvider: RestProvider) {
    this.getTodo()
  }

  public async getTodo() {
    await this.restProvider.getAll()
      .subscribe((todo: Array<any>) => this.todos = todo)
  }

  public async addTodo() {
    await this.restProvider.addTodo(this.todo)
      .subscribe((res) => {
        if (res) {
          this.todos.push(res);
        }

      }, (err) => {

        if (err.status == 404)
          console.log('Endereço da API inválido')
      }, () => {
        this.todo.title = '';
      }
      );
  }



}
