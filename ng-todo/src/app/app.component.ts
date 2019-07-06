import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h2>Todo List</h2>
      <div class="container">
        <app-add-todo></app-add-todo>
        <app-todo-list></app-todo-list>
      </div>
    </main>
  `
})
export class AppComponent {}
