import React, { Component } from 'react';

export default class Visualiser extends Component {
  render() {
    return (
      <div className="visualisation">
        <canvas id="canvas-main-visualisation"> </canvas>
      </div>
    );
  }
}