import React, { Component } from 'react';

export default class Playlist extends Component {
  render() {
    return (
      <div className="playlists">
        <h6 className="playlists-header">
          ====== Playlists ======
        </h6>
        <ul className="playlists-list">
          <li className="playlist-info">
            <div className="playlist-index">
              1.
            </div>
            <div className="playlist">
              Discover Weekly - songs: 20 - By: cjwesstrom
            </div>
            <div className="playlist-time">
              80:00
            </div>
          </li>
          <li className="playlist-info">
            <div className="playlist-index">
              1.
            </div>
            <div className="playlist">
              Discover Weekly - songs: 20 - By: Spotify
            </div>
            <div className="playlist-time">
              80:00
            </div>
          </li>
        </ul>
        <div className="playlist-utility">
          <button className="playlist-load">Load Playlist</button>
          <button className="playlist-clear">Clear Playlist</button>
        </div>
      </div>
    );
  }
}