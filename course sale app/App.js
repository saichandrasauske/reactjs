import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';
class App extends Component {
  render() {
     var courses =[
       {name:'complete IOS Dev Course',price:199},
       {name:'complete Pentesting Course',price:299},
       {name:'complete front-end Dev Course',price:169},
       {name:'complete Bug Bounty and Web app Pentesting Course',price:159}
     ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course cart sale app</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
