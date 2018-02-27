import React, { Component } from 'react';

export default class Equalizer extends Component {
  render() {
    return (
      <div className="equalizer">
        <div className="eq-control-all slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-60 slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-170 slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-30 slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-600 slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-1k slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-3k slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-6k slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-12k slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-14k slider-wrapper">
          <input type="range" />
        </div>
        <div className="eq-16k slider-wrapper">
          <input type="range" />
        </div>
      </div>
    );
  }
}