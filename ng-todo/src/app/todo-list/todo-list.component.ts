import { Component } from '@angular/core';
import AppService from '../app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  constructor(
    protected appService: AppService,
  ) { }
}
