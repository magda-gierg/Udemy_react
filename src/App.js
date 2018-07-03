import React, { Component } from 'react';
import Radium from 'radium'
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: "acs", name: "Max", age: 24},
      {id: "jik", name: "Julia", age: 4},
      {id: "dgs", name: "Tom", age: 40}
    ],
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons})
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState( {persons: persons} )
  }

  render() {

const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'lightgreen',
    color: 'black'
  }


}

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>{this.state.persons.map((person, index) => {
          return <Person
          name={person.name}
          age={person.age}
          click={() => this.deletePersonHandler(index)}
          key={person.id}
          changed={(event) => this.changeNameHandler(event, person.id)} />
        })
      }
      </div>
    )
    style.backgroundColor = 'red'
    style [':hover']= {
      backgroundColor: 'pink',
      color: 'black'
    }
  }

  return (
    <div className="App">
    <h1>Hi, I am React App!</h1>
    <button
    style={style}
    onClick={this.togglePersonsHandler} >Toggle Persons</button>
    {persons}
    </div>
  );
}
}

export default Radium(App);
