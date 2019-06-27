import React from 'react'

const TodoItem = (props) => {
    const { todo, handleChange, handleRemove } = props;
    return (
        <li className="todo" key={ todo.id }>
            <span>{ todo.id }.</span>
            <span>Todo : { todo.content }</span>
            <div className="button-box">
                <button className="change" type="button" onClick={() => handleChange(todo)}>
                    { todo.complete ? '완료' : '미완료' }
                </button>
                <button className="remove" type="button" onClick={() => handleRemove(todo.id)}>
                    제거
                </button>
            </div>
        </li>
    );
}

export const TodoList = (props) => {
    const { todoList, handleChange, handleRemove } = props;
    return (
        <React.Fragment>
            {
                todoList.map(todo => {
                    return (
                        <TodoItem 
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
//             <>
//                 { todoList.map(todo => {
//                     return (
//                         <div className="todo" key={ todo.id }>
//                             <span>{ todo.id }.</span>
//                             <span>Todo: { todo.content }</span>
//                             <div className="button-box">
//                                 <button type="button" onClick={() => handleChange(todo)}>{ todo.complete ? '완료' : '실패' }</button>
//                                 <button type="button" onClick={() => handleRemove(todo.id)}>remove</button>
//                             </div>
//                         </div>
//                     )})
//                 }
//             </>
//         )
//     }
// }


