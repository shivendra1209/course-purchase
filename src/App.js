import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './coursesales';

class App extends Component {
  render() {
      var courses = [
        {name:'Complete Android App Dev Course ->',price:1999},
        {name:'Complete Back-end Dev Course -> ',price:2500},
        {name:'Complete Front-end Dev Course ->',price:3000},
        {name:'Full stack Dev Course ->',price:6000}
      ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Course Sales Page</h1>
        </header>
        <Coursesales items={courses}/>

      </div>
    );
  }
}

export default App;
