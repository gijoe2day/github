import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Body content one" },
      { id: 2, content: "Body content two" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="app container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/addTodo" component={AddTodo} />
            <Route path="/:post_id" component={Post}>
              <h1 className="center blue-text">Todo List</h1>
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
              <AddTodo addTodo={this.addTodo} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
