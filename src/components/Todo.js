import React from "react";

function Todo(props) {

    return(
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`item${props.todo.complete ? "complete" : ""}`}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo