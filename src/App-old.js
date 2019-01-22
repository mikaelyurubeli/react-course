import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Title task one",
          completed: false
        },
        {
          id: 2,
          title: "Title task two",
          completed: false
        },
        {
          id: 3,
          title: "Title task three",
          completed: false
        }
      ]
    }
    
    this.onChange = this.onChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  onChange (id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    })
  }

  addTodo(title) {
    let newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteItem(id) {
    this.setState({
      todos: this.state.todos.filter((x) => x.id !== id)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={(props) => (
                <div>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} onChange={this.onChange} deleteItem={this.deleteItem}/>
                </div>
              )}
            />
            <Route 
              path="/about" component={About}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
