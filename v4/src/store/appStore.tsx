import { observable, action } from 'mobx';
import { Todo } from '../App';

export default class AppStore {
    @observable 
    todoList: Array<Todo> = [
        { id: 1, content: 'HTML', complete: false },
        { id: 2, content: 'CSS', complete: false },
        { id: 3, content: 'JS', complete: true },
    ];

    @observable
    content: string = '';

    @action
    handleContent = (content: string) => {
        this.content = content;
    }

    @action
    handleRemove = (id: number): void => {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
    }

    @action
    handleSubmit = (): void => {
        if (this.content.length < 1) { return; };
        this.todoList = this.todoList.concat({ id: this.createId(), content: this.content, complete: false });
        this.content = '';
    }

    createId = (): number => {
        return this.todoList.length ? Math.max(...this.todoList.map(list => list.id)) + 1 : 1
    }

    @action
    handleChange = (todo: Todo): void => {
        this.todoList = this.todoList.map(item => {
            if (todo.id === item.id) {
                item.complete = !item.complete
            };
            return item;
        })
    }
}