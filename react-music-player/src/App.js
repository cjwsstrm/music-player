import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Player from './components/player';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <input type="file" id="thefile" accept="audio/*" />
        <audio id="audio" controls></audio>
        <Player />
      </div>
    );
  }
}

export default App;
