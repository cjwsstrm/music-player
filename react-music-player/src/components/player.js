import React, { Component } from 'react';
import Controls from '../components/controls';
import Equalizer from '../components/equalizer';
import Playlist from '../components/playlist';
import Visualiser from '../components/visualiser';
import Songs from '../components/songs';

export default class Player extends Component {
  render() {
    return (
      <div className="player-container">
        <Controls />
        <Visualiser />
        <Equalizer />
        <Playlist />
        <Songs />
      </div>
    );
  }
}