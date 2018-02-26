import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-login">
          Login to your Spotify account
        </div>
        <div className="header-logo">
          Music Player
        </div>
        <div className="header-stats">
          <p>Total songs played: 10</p>
          <p>Total time listened: 45:00</p>
        </div>
      </div>
    );
  }
}