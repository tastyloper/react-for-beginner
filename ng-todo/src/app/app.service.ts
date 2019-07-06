import { Injectable } from "@angular/core";

interface Todo {
    id: number;
    complete: boolean;
    content: string;
}

@Injectable()
export default class AppService {
    
    todoList: Array<Todo> = [
        { id: 1, content: 'HTML', complete: false },
        { id: 2, content: 'CSS', complete: true },
        { id: 3, content: 'JS', complete: false },
    ];

    handleRemove = (id: number): void => {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
    }

    handleSubmit = (content: string): void => {
        this.todoList = this.todoList.concat({ id: this.createId(), content, complete: false });
    }

    createId = (): number => {
        return this.todoList.length ? Math.max(...this.todoList.map(list => list.id)) + 1 : 1
    } 

    handleChange = (todo: Todo): void => {
        this.todoList = this.todoList.map(item => {
            if (todo.id === item.id) {
                item.complete = !item.complete
            };
            return item;
        })
    }
}