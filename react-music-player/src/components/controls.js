import React, { Component } from 'react';
import DisplayWindow from './display-window';
import SongDuration from './song-duration';
import ControlButtons from './control-buttons';

export default class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: ''
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.stop = this.stop.bind(this);
    this.displayCurrentSong = this.displayCurrentSong.bind(this);
  }


  displayCurrentSong() {
    var currentFile = document.getElementById('thefile');
    var currentFileName = currentFile.files[0].name;
    this.setState({
      song: currentFileName
    });

    let addedFiles = [];
    function listFiles() {
      for (var i = 0, numFiles = currentFile.files.length; i < numFiles; i++) {
        // console.log(currentFile.files[i].name);
        addedFiles.push(currentFile.files[i]);
      }
    }
    listFiles();

    console.log(`Source(s) from file: ${addedFiles[0].name}`);
  }

  play() {
    console.log(`Duration: ${this.audioRef.duration}`);
    console.log(`Source from <audio> (it's a blob): ${this.audioRef.currentSrc}`);
    this.audioRef.play();
    this.displayCurrentSong();
    // var elem = document.getElementById("visualisation");
    // elem.classList.toggle('visualiser-fullscreen');
    // elem.webkitRequestFullscreen();
  }

  pause() {
    this.audioRef.pause();
    // var elem = document.getElementById("visualisation");
    // // console.log(elem);
    // elem.classList.toggle('visualiser-fullscreen');
  }

  stop() {
    this.audioRef.load();
  }

  repeat() {
    this.audioRef.loop = true;
    console.log('now repeating song');
  }

  render() {
    return (
      <div className="controls">
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