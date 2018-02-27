import React, { Component } from 'react';

export default class DisplayWindow extends Component {
  render() {
    return (
      <div className="song-summary">
        <div className="display-window">
          <div className="currently-playing">
            1. We Were Promised Jetpacks - Quite Little Voices
          </div>
          <div className="play-pause">
            <i className="fas fa-play"></i>
          </div>
          <div className="time-left">
            2:47
          </div>
        </div>
        <div className="playback-speed">
          playback speed
          <input type="range" />
        </div>
        <div className="volume-control">
          volume
          <input type="range" />
        </div>
      </div>
    );
  }
}