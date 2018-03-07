import React, { Component } from 'react';

export default class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.play = this.props.play.bind(this);
    this.pause = this.props.pause.bind(this);
  }

  // play() {
  //   console.log(this.props.audioRef);
  //   // this.props.audioRef.play();
  // }

  // pause() {
  //   // this.props.audioRef.pause();
  // }

  render() {
    return (
      <div className="player-control-buttons">
        <a className="previous">
          <i className="fas fa-step-backward"></i>
        </a>
        <a onClick={this.play} className="play">
          <i className="fas fa-play"></i>
        </a>
        <a  onClick={this.pause} className="pause">
          <i className="fas fa-pause"></i>
        </a>
        <a className="next">
          <i className="fas fa-step-forward"></i>
        </a>
        <a className="stop">
          <i className="fas fa-stop"></i>
        </a>
        {/* <!-- <a className="show-playlist"></a> --> */}
        <a className="shuffle">
          <i className="fas fa-random"></i>
        </a>
        <a className="repeat">
          <i className="fas fa-redo"></i>
          {/* <!-- <i className="fas fa-repeat-1"></i> --> */}
        </a>
      </div>
    );
  }
}