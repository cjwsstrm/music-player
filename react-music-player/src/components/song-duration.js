import React, { Component } from 'react';

export default class SongDuration extends Component {
  render() {
    return (
      <div className="song-duration">
        time left
        <input className="song-time" type="range" />
      </div>
    );
  }
}