import React from "react";

import Todo from "./Todo";

function TodoList(props){
    return(
        <div className='todo-list'>
            {
                props.todoList.map(todo => (
                    <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
                ))
            }
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList