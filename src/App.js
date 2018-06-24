import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 24},
      {name: "Julia", age: 4},
      {name: "Tom", age: 40}
    ],
    showPersons: false
  }

switchNameHandler = () => {
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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({showPersons: !doesShow })
}

  render() {
    return (
      <div className="App">
      <h1>Hi, I am React App!</h1>
      <button onClick={this.togglePersonsHandler} >Switch name</button>
      {this.state.showPersons === true ?
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}>I like ice-cream.</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.changeNameHandler}/>
      </div> : null}
      </div>
    );
  }
}

export default App;
