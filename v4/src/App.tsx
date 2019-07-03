import React from 'react';
import './App.css';
import { TodoItem } from './component/todoItem';
import AddTodo from './component/addTodo';
import { inject, observer } from 'mobx-react';

export interface Todo {
  id: number;
  complete: boolean;
  content: string;
}

@inject('appStore')
@observer
export default class App extends React.Component<any> {

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
          <AddTodo onSubmit={appStore.handleSubmit} onChange={appStore.handleContent}/>
          {todoList}
        </div>
      </main>
    )
  }
}