import React from "react";
import styled from 'styled-components'

const StyledForm = styled.div`
    text-align: center;

    form > input {
        background-color: #FFFCF2;
        border: 0;
        padding: 6px 0;
        font-size: 1rem;
        width: 240px;
        outline: 0;
        color: black;
        border-bottom: 1px solid #252422;
        margin-right: 8px;
    }

    button {
        background-color: #EB5E28;
        border: 1px solid #252422;
        color: #252422;
        font-size: 16px;
        padding: 6px 14px;
    }

    .clear-btn {
        margin-top: 2%;
    }
`

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          task: ""
        };
      }

    changeHandler = event => {
        this.setState({
            task: event.target.value
        });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({
            task: ""
        });
    };

    // Render
    render() {
        return(
            <StyledForm>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.changeHandler}
                    />
                    <button>Add</button>
                </form>
                <button className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed</button>
            </StyledForm>
        )
    }
}

export default TodoForm