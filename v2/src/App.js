import React from 'react';
import AddTodo from './component/addTodo';
import { TodoList } from './component/todoList';
import './App.css';
export default class App extends React.Component {
  state = {
    todoList: [
      { id: 1, content: 'HTML', complete: false },
      { id: 2, content: 'CSS', complete: false },
      { id: 3, content: 'JS', complete: true },
    ]
  }

  handleSubmit = (content = '') => {
    const item = { id: this.createId(), content, complete: false };
    this.setState({
      todoList: this.state.todoList.concat(item),
    });
  }

  createId = () => {
    const { todoList } = this.state;
    return todoList.length ? Math.max(...todoList.map(list => list.id)) + 1 : 1
  }

  handleChange = (todo = { id: 0, content: '', complete: false }) => {
    const { todoList } = this.state;
    todoList.forEach(item => {
      if (todo.id == item.id) {
        item.complete = !item.complete
      };
    });
    this.setState({ todoList })
  }

  handleRemove = (id = 0) => {
    const todoList = this.state.todoList.filter(todo => todo.id != id);
    this.setState({ todoList });
  }

  render() {
    const { todoList } = this.state;
    return (
      <main>
        <h2>Todo List</h2>
        <div className="container">
          <AddTodo onSubmit={ this.handleSubmit }/>
          <TodoList 
            handleChange={ this.handleChange }
            handleRemove={ this.handleRemove }
            todoList={ todoList }/>
        </div>
      </main>
    )
  }
}