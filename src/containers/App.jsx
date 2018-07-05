import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons'
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
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}/>
      </div>
    )
    style.backgroundColor = 'red'
  }

  return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
  )
}
}

export default App;
