import { Component, OnInit } from '@angular/core';
import AppService from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent implements OnInit {

  dataset: FormGroup;
  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.dataset = new FormGroup({
      content: new FormControl(null, Validators.required)
    });
  }

  addTodo = (): void => {
    this.appService.handleSubmit(this.dataset.value.content);
    this.dataset.reset();
  }
}
