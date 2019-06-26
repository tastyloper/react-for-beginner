import React from 'react'
import './todoList.css';

const Todo = (props) => {
    const { todo, handleChange, handleRemove } = props;
    return (
        <div className="todo" key={ todo.id }>
            <span>{ todo.id }.</span>
            <span>Todo : { todo.content }</span>
            <div className="button-box">
                <button className="change" type="button" onClick={() => handleChange(todo)}>{ todo.complete ? '완료' : '미완료' }</button>
                <button className="remove" type="button" onClick={() => handleRemove(todo.id)}>제거</button>
            </div>
        </div>
    )
}

export const TodoList = (props) => {
    const { todoList, handleChange, handleRemove } = props;
    return (
        <React.Fragment>
                {/* { todoList.map(todo => {
                    return (
                      
                        <div key={ todo.id }>
                            <p>id: { todo.id } / { todo.content } / 
                                <button type="button" onClick={() => handleChange(todo)}>{ todo.complete ? '완료' : '실패' }</button>
                                <button type="button" onClick={() => handleRemove(todo.id)}>remove</button>
                            </p>
                        </div>
                    )})
                } */}
                {
                    todoList.map(todo => {
                        return (
                            <Todo 
                                todo={ todo }
                                key={ todo.id }
                                handleChange={ handleChange }
                                handleRemove={ handleRemove }
                            />
                        )
                    })
                }
        </React.Fragment>
    )
}

// export default class TodoList extends React.Component {
//     render() {
//         const { todoList, handleChange, handleRemove } = this.props;
//         return (
//             <div className="todo-list">
//                 { todoList.map(todo => {
//                     return (
                      
//                         <div key={ todo.id }>
//                             <p>id: { todo.id } / { todo.content } / 
//                                 <button type="button" onClick={() => handleChange(todo)}>{ todo.complete ? '완료' : '실패' }</button>
//                                 <button type="button" onClick={() => handleRemove(todo.id)}>remove</button>
//                             </p>
//                         </div>
//                     )})
//                 }
//                 {
//                     todoList.map(todo => {
//                         return (
//                             <Todo 
//                                 todo={ todo }
//                                 key={ todo.id }
//                                 handleChange={ handleChange }
//                                 handleRemove={ handleRemove }
//                             />
//                         )
//                     })
//                 }
//           </div>
//         )
//     }
// }


