import React, { Component } from 'react';
import DisplayWindow from './display-window';
import SongDuration from './song-duration';
import ControlButtons from './control-buttons';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    // console.log(this.audioRef);
    this.audioRef.play();
  }

  pause() {
    this.audioRef.pause();
  }

  render() {
    return (
      <div className="controls">
        <input
          type="file"
          id="thefile"
          accept="audio/*" />
        <audio
          id="audio"
          ref={(input) => { this.audioRef = input; }}
          controls>
        </audio>
        <DisplayWindow />
        <SongDuration />
        <ControlButtons play={this.play}
          pause={this.pause} />
      </div>
    );
  }

}