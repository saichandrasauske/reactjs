import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen';
import Message from './Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Authen/>
       <Message/>
      </div>
    );
  }
}

export default App;
