import React, { Component } from 'react';

export default class Visualiser extends Component {

  componentDidMount() {
    // Initial Bar Visualisation
    var analyser, canvas, ctx;
    // random = Math.random, circles = [];

    window.onload = function () {
      var file = document.getElementById("thefile");
      var audio = document.getElementById("audio");

      file.onchange = function () {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        // audio.style.width = 400 + 'px';

        var audioContext = new window.AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftsize = 256;
        var source = audioContext.createMediaElementSource(audio);

        canvas = document.getElementById('canvas-main-visualisation');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        function draw() {
          var freqByteData = new Uint8Array(analyser.frequencyBinCount);
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(freqByteData);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (var i = 1; i < freqByteData.length; i += 10) {
            ctx.fillStyle = `orange`;
            ctx.fillRect(i, canvas.height - freqByteData[i] * 2, 10, canvas.height);
            ctx.strokeRect(i, canvas.height - freqByteData[i] * 2, 10, canvas.height);
          }
        }
        draw();
      };
    };

  }

  render() {
    return (
      <div className="visualisation">
        <canvas id="canvas-main-visualisation"> </canvas>
      </div>
    );
  }
}