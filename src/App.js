import React, { Component } from 'react';
import './App.css';
import Header from "./container/header/header"
import Main from "./container/main/Main.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
