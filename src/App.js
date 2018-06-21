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

this.setState({
    persons: [
      {name: "Adam", age: 24},
      {name: "Julia", age: 4},
      {name: "Tom", age: 99}
    ]
  })
}

changeNameHandler = (event) => {
  this.setState({
    persons: [
      {name: "Max", age: 24},
      {name: "Julia", age: 4},
      {name: event.target.value, age: 40}
    ]
  })

}

  render() {
    return (
      <div className="App">
      <h1>Hi, I am react app!</h1>
      <button onClick={this.switchNameHandler} >Switch name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler}>I like ice-cream.</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        changed={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;
