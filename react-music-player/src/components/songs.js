import React, { Component } from 'react';

export default class Songs extends Component {

  chooseFile() {
    var file = document.getElementById('thefile');
    file.click();
  }


  render() {
    this.chooseFile = this.chooseFile.bind(this);

    return (
      <div className="songs">
        {/* <h6 className="songs-header">
          ======== Songs =========
        </h6> */}
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
          <button className="fileUploadButton" onClick={this.chooseFile}>Load song(s)</button>
          <div className="songs-total-time">
            0:00 / 80:00
          </div>
        </div>
      </div>
    );
  }
}