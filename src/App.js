import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      message: 'Todo App',
      newTodo: '',
      todos: [{
        title: 'Learn react',
        done: false
      },
      {
        title: 'Go to the shop',
        done: false
      }]
    };
  }

  newTodoChanged(event){
      this.setState({
      newTodo: event.target.value
    });
  };

  fromSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo:'',
      todos: [...this.state.todos,{
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTododone(event,index){
    console.log(event.target.checked);
    const todos = [...this.state.todos];
    todos[index] = {...todos[index]};
    todos[index].done = event.target.checked; 
    console.log(todos);
      this.setState({
        todos
      });
  }
  removeTodo(index){
    console.log(index);
    const todos =[...this.state.todos];
    todos.splice(index, 1);

      this.setState({
        todos
      });

  }

  allDone(){
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  };

  render() { 
    return (
      <div className="App">
        <h3>{this.state.message}</h3> 


        
        <button onClick={() => this.allDone()}>All Done</button>
        
        <ul className="todoList">
          {this.state.todos.map((todo,index) => {
            return <li key={todo.title} className="listItem">
            <input onChange={(event) => this.toggleTododone(event, index)} type="checkbox" 
            checked={todo.done} />
              <span className={todo.done ? 'done' : ''}> {todo.title} </span>
              <button onClick={() => this.removeTodo(index)} className="btn-warn"> X</button>
              </li>
          })}
        </ul>
      <NewTodoForm 
      //Props
       newTodo = {this.state.newTodo}
       fromSubmitted={this.fromSubmitted.bind(this)}
       newTodoChanged={this.newTodoChanged.bind(this)}
       />
      </div>
    );
  }
}

export default App;
















