import React from 'react';
import ReactDOM from 'react-dom'

// Components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoListInit = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()

    this.state = {
      todoList: todoListInit
    }
  }

  addTodo = taskName => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  }

  toggleCompleted = todoId => {
    // loop through all groceries, find the one on which we clicked,
    // toggle the purchased field for that item
    // else, leave the item untouched
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => {
        if(todo.completed === false){
          return (todo)
        }
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h2>Welcome to your Todo App!</h2>
        </header>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          todoList={this.state.todoList}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
