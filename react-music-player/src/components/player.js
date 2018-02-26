import React, { Component } from 'react';
import Controls from '../components/controls';
import Equalizer from '../components/equalizer';
import Playlist from '../components/playlist';
import Visualiser from '../components/visualiser';
import Songs from '../components/songs';

export default class Player extends Component {
  render() {
    return (
      <div className="player-container">
        <div className="controls">
          <div className="song-summary">
            <div className="display-window">
              <div className="currently-playing">
                1. We Were Promised Jetpacks - Quite Little Voices
              </div>
              <div className="play-pause">
                <i className="fas fa-play"></i>
              </div>
              <div className="time-left">
                2:47
              </div>
            </div>
            <div className="playback-speed">
              playback speed
              <input type="range" />
            </div>
            <div className="volume-control">
              volume
              <input type="range" />
            </div>
          </div>
          <div className="song-time-left">
            time left
            <input className="song-time" type="range" />
          </div>
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
        </div>
        <div className="visualisation">
          <canvas id="canvas-main-visualisation"> </canvas>
        </div>
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
        <div className="songs">
          <h6 className="songs-header">
            ======== Songs =========
          </h6>
          <ul className="songs-list">
            <li className="song-info">
              <div className="song-index">
                1.
              </div>
              <div className="song">
                We Were Promised Jetpacks - Quite Little Voices
              </div>
              <div className="song-time">
                4:21
              </div>
            </li>
            <li className="song-info">
              <div className="index">
                1.
              </div>
              <div className="song">
                We Were Promised Jetpacks - Quite Little Voices
              </div>
              <div className="song-time">
                4:21
              </div>
            </li>
          </ul>
          <div className="songs-utility">
            <button className="songs-orderBy">order by</button>
            <div className="songs-total-time">
              0:00 / 80:00
            </div>
          </div>
        </div>
      </div>
    );
  }
}