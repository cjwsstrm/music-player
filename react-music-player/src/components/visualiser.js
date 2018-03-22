import React, { Component } from 'react';

export default class Visualiser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVisual: 'bars'
    };
    this.handleClick = this.handleClick.bind(this);
    this.visualise = this.visualise.bind(this);
    this.drawVisual;
  }

  visualise() {
    console.log('test');
    var analyser, canvas, ctx;

    // window.onload = function () {
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

    var source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // Bar visualisation
    if (this.state.currentVisual === 'bars') {
      analyser.fftSize = 128;
      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
      var drawBars = () => {

        this.drawVisual = requestAnimationFrame(drawBars);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var barWidth = (canvas.width / bufferLength);
        var barHeight;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0.5, 'orange');
          gradient.addColorStop(0.75, 'yellow');
          gradient.addColorStop(1, 'green');
          ctx.fillStyle = gradient;
          ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      };
      drawBars();
    }

    // Wave visualisation

    if (this.state.currentVisual === 'wave') {
      analyser.fftSize = 2048;
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
      var drawWave = () => {
        this.drawVisual = requestAnimationFrame(drawWave);

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
      };
      drawWave();
    }
  }

  handleClick() {
    this.visualise();
    if (this.state.currentVisual === 'bars') {
      this.setState({
        currentVisual: 'wave'
      });
      window.cancelAnimationFrame(this.drawVisual);
      this.visualize;
    }
    if (this.state.currentVisual === 'wave') {
      this.setState({
        currentVisual: 'bars'
      });
    }
    window.cancelAnimationFrame(this.drawVisual);
    this.visualize;
    console.log('currentState: ' + this.state.currentVisual);
  }

  render() {
    return (
      <div className="visualisation" id="visualisation" onClick={this.handleClick}>
        <canvas id="canvas-main-visualisation"> </canvas>
      </div>
    );
  }
}