import React, { Component } from 'react';
import Person from './Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 24},
      {name: "Julia", age: 4},
      {name: "Tom", age: 40}
    ]
  }
switchNameHandler = () => {
console.log("was clicked!")
}

  render() {
    return (
      <div className="App">
      <h1>Hi, I am react app!</h1>
      <button onClick={this.switchNameHandler} >Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like ice-cream.</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
