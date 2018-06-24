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

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice()
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1)
  this.setState({persons: persons})
}

  render() {
    let persons = null
      if (this.state.showPersons) {
        persons = (
          <div>{this.state.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)} />
            {/*click={this.deletePersonHandler.bind(this, index)}*/}
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
