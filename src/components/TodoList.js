import React from "react";
import styled from 'styled-components'

import Todo from "./Todo";

const StyledTodoList = styled.div`
    width: 80%;
    margin: 5% auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .todo {
        margin-bottom: 2%;
        text-align: center;
        width: 23%;
        background-color: #CCC5B9;
    }

    .completed {
        margin-bottom: 2%;
        text-align: center;
        background-color: #FFFCF2;
        width: 23%;
        border: 3px solid #CCC5B9;
        color: #CCC5B9;
    }
`

function TodoList(props){
    return(
        <div className='todo-list'>
            <StyledTodoList>
                {
                    props.todoList.map(todo => (
                        <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
                    ))
                }
            </StyledTodoList>
        </div>
    )
}

export default TodoList