import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Player from './components/player';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
      </div>
    );
  }
}

export default App;
