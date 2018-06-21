import React, { Component } from 'react';
import Person from './Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi</h1>
      <Person name="Max" age="24"/>
      <Person name="Julia" age="4">I like ice-cream.</Person>
      <Person name="Tom" age="40"/>
      </div>
    );
  }
}

export default App;
