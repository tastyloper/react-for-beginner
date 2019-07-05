import React from 'react';
import { TodoItem, AddTodo } from './component';
import { inject, observer } from 'mobx-react';

export interface Todo {
  id: number;
  complete: boolean;
  content: string;
}

@inject('appStore')
@observer
export default class App extends React.Component<any> {

  handleSubmit = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    this.props.appStore.handleSubmit();
    e.target.reset();
  }

  render(): JSX.Element {
    const { appStore } = this.props;
    const todoList = appStore.todoList.map((todo: Todo) => {
      return (
        <TodoItem
          todo={ todo }
          key={ todo.id }
          handleChange={ appStore.handleChange }
          handleRemove={ appStore.handleRemove }
        />
      )
    });

    return (
      <main>
        <h2>Todo List</h2>
        <div className="container">
          <AddTodo onSubmit={this.handleSubmit} onChange={appStore.handleContent}/>
          {todoList}
        </div>
      </main>
    )
  }
}