import React, { Component } from 'react';
import DisplayWindow from './display-window';
import SongDuration from './song-duration';
import ControlButtons from './control-buttons';

export default class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: ''
    }

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.stop = this.stop.bind(this);
    this.displayCurrentSong = this.displayCurrentSong.bind(this);
  }
   
  
  displayCurrentSong() {
    var file = this.fileInput.files[0]; 
    this.setState({
      song: file.name
    });
    // console.log(`Source from file: ${this.state.song}`);
  }

  play() {
    console.log(`Duration: ${this.audioRef.duration}`);
    console.log(`Source from <audio> (it's a blob): ${this.audioRef.currentSrc}`);
    this.audioRef.play();
    this.displayCurrentSong();
  }

  pause() {
    this.audioRef.pause();
  }

  stop() {
    this.audioRef.load();
  }

  repeat() {
    this.audioRef.loop=true;
    console.log('now repeating song');
  }

  render() {
    return (
      <div className="controls">
        <input
          type="file"
          id="thefile"
          accept="audio/*"
          ref={input => { this.fileInput = input; }} />
        <audio
          id="audio"
          ref={(input) => { this.audioRef = input; }}>
        </audio>
        <DisplayWindow songName={this.state.song} />
        <SongDuration />
        <ControlButtons play={this.play}
          pause={this.pause}
          repeat={this.repeat}
          stop={this.stop} />
      </div>
    );
  }

}