import React from 'react';
import './App.css';
import { TodoItem } from './component/TodoItem';
import AddTodo from './component/AddTodo';

interface Props {}

export interface Todo {
  id: number;
  complete: boolean;
  content: string;
}

export default class App extends React.Component<Props> {
  state: { todoList: Array<Todo> };

  constructor(props: Props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, content: 'HTML', complete: false },
        { id: 2, content: 'CSS', complete: false },
        { id: 3, content: 'JS', complete: true },
      ]
    }
  }

  handleSubmit = (content: string): void => {
    const todoList = this.state.todoList.concat({ id: this.createId(), content, complete: false });
    this.setState({ todoList });
  }

  createId = (): number => {
    const { todoList } = this.state;
    return todoList.length ? Math.max(...todoList.map(list => list.id)) + 1 : 1
  }

  handleChange = (todo: Todo): void => {
    const { todoList } = this.state;
    todoList.forEach(item => {
      if (todo.id === item.id) {
        item.complete = !item.complete
      };
    });
    this.setState({ todoList })
  }

  handleRemove = (id: number): void => {
    const todoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList });
  }

  render(): JSX.Element {
    const { todoList } = this.state;
    const list: JSX.Element[] = todoList.map(todo => {
      return (
        <TodoItem
          todo={ todo }
          key={ todo.id }
          handleChange={ this.handleChange }
          handleRemove={ this.handleRemove }
        />
      )
    })

    return (
      <main>
        <h2>Todo List v3</h2>
        <div className="container">
          <AddTodo onSubmit={ this.handleSubmit }/>
          <ul>
            { list }
          </ul>
        </div>
      </main>
    )
  }
}