import { Component } from '@angular/core';
import AppService from '../app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(
    public appService: AppService,
  ) { }
}
