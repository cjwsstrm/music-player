import React, { Component } from 'react';

export default class Visualiser extends Component {

  componentDidMount() {
    var analyser, canvas, ctx;

    window.onload = function () {
      var file = document.getElementById("thefile");
      var audio = document.getElementById("audio");

      file.onchange = function () {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();

      };
      // Find canvas and set context
      canvas = document.getElementById('canvas-main-visualisation');
      canvas.width = document.querySelector('.visualisation').clientWidth;
      canvas.height = document.querySelector('.visualisation').clientHeight;
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set audioContext and properties
      var audioContext = new window.AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.smoothingTimeConstant = .9;
      analyser.fftSize = 2048;

      var source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);


      // Bar visualisation
      // function draw() {
      //   requestAnimationFrame(draw);

      //   analyser.getByteFrequencyData(dataArray);

      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   var barWidth = (canvas.width / bufferLength);
      //   var barHeight;
      //   var x = 0;

      //   for (var i = 0; i < bufferLength; i++) {
      //     barHeight = dataArray[i];
      //     var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      //     gradient.addColorStop(0.5, 'orange');
      //     gradient.addColorStop(0.75, 'yellow');
      //     gradient.addColorStop(1, 'green');
      //     ctx.fillStyle = gradient;
      //     ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      //     x += barWidth + 1;
      //   }
      // }
      // draw();


      // Wave visualisation
      
      function draw() {

        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';

        ctx.beginPath();

        var sliceWidth = canvas.width / bufferLength;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {

          var v = dataArray[i] / 128.0;
          var y = v * canvas.height / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          x += sliceWidth + 1;
        }
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
      }

      draw();
    };

  }



  render() {
    return (
      <div className="visualisation" id="visualisation">
        <canvas id="canvas-main-visualisation"> </canvas>
      </div>
    );
  }
}