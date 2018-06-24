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
let persons = null
if (this.state.showPersons) {
  persons = (
    <div>{this.state.persons.map(person => {
      return <Person
        name={person.name}
        age={person.age} />
        })
      }
    </div>
  )
}

    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <button onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
