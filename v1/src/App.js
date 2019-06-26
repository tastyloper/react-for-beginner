import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    content: '',
    todoList: [
      { id: 1, content: 'HTML', complete: false },
      { id: 2, content: 'CSS', complete: false },
      { id: 3, content: 'JS', complete: true },
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.createTodo(this.state.content);
    e.target.reset();
  }

  createTodo = (content) => {
    const item = { id: this.createId(), content, complete: false };
    this.setState({
      todoList: this.state.todoList.concat(item),
    });
  }

  createId = () => {
    const { todoList } = this.state;
    return todoList.length ? Math.max(...todoList.map(list => list.id)) + 1 : 1
  }

  handleContent = (content) => {
    this.setState({content});
  }

  handleChange = (todo) => {
    const { todoList } = this.state;
    todoList.forEach(item => {
      if (todo.id == item.id) {
        item.complete = !item.complete
      };
    });
    this.setState({ todoList })
  }

  handleRemove = (id) => {
    const todoList = this.state.todoList.filter(todo => todo.id != id);
    this.setState({ todoList });
  }

  render() {
    const { todoList } = this.state;
    return (
      <main>
        <form className="add-todo" onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="add Todo" onChange={(e) => this.handleContent(e.target.value)}/>
          <button type="submit">add</button>
        </form>
        <div className="todo-list">
          { todoList.map(todo => {
            return (
              <div key={ todo.id }>
                <p>id: { todo.id } / { todo.content } / 
                  <button onClick={() => this.handleChange(todo)}>{ todo.complete ? '완료' : '실패' }</button>
                  <button type="button" onClick={() => this.handleRemove(todo.id)}>remove</button>
                </p>
              </div>
            )
          })}
        </div>
      </main>
    )
  }
}