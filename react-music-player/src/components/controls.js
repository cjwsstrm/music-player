import React, { Component } from 'react';
import DisplayWindow from './display-window';
import SongDuration from './song-duration';
import ControlButtons from './control-buttons';

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <DisplayWindow />
        <SongDuration />
        <ControlButtons />
      </div>
    );
  }

}