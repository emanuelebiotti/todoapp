import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pokemon from './components/pages/Pokemon';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Buy some bread',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Cook for dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Have some shopping',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Hang out with friends',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Get some sleep',
        completed: false
      }
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
           todo.completed = !todo.completed;
        } 
        return todo;
      })
    })
  }

  //delTodo 

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => 
        todo.id !== id
      )]
    })
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), 
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contact}/>
            <Route path="/pokemon" component={Pokemon}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
