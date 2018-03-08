import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Player from './components/player';



class App extends Component {

// include logic to check that file.type is mp3/ogg/desired format. If not prompt user to choose correct file

  render() {
    return (
      <div className="App">
        <input
          type="file"
          id="thefile"
          accept="audio/*"
          multiple
          ref={input => { this.fileInput = input; }} />
        <Header />
        <Player />
      </div>
    );
  }
}

export default App;
