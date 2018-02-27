import React, { Component } from 'react';

export default class ControlButtons extends Component {
  render() {
    return (
      <div className="player-control-buttons">
        <button className="previous">
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="play">
          <i className="fas fa-play"></i>
        </button>
        <button className="pause">
          <i className="fas fa-pause"></i>
        </button>
        <button className="next">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="stop">
          <i className="fas fa-stop"></i>
        </button>
        {/* <!-- <button className="show-playlist"></button> --> */}
        <button className="shuffle">
          <i className="fas fa-random"></i>
        </button>
        <button className="repeat">
          <i className="fas fa-redo"></i>
          {/* <!-- <i className="fas fa-repeat-1"></i> --> */}
        </button>
      </div>
    );
  }
}