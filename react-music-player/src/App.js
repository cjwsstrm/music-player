import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Player from './components/player';



class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    console.log(params);
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='App'>
          <a href='http://localhost:8888'> Login to Spotify </a>
        </div>
        <Player />
      </div>
    );
  }
}

export default App;
