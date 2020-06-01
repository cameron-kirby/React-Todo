import React from "react";

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
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.changeHandler}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm