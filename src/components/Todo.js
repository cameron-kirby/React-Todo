import React from "react";

function Todo(props) {
    return(
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`${props.todo.completed ? "completed" : "todo"}`}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo