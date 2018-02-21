// Initial Bar Visualisation
var analyser, canvas, ctx, random = Math.random, circles = [];

window.onload = function () {
    canvas = document.getElementById('canvas-main-visualisation');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');

    setupWebAudio();
    draw();
};

function setupWebAudio() {
    var audio = document.createElement('audio');
    audio.src = 'deathcab1.mp3';
    // audio.controls = 'true';
    document.body.appendChild(audio);
    audio.style.width = window.innerWidth + 'px';

    var audioContext = new window.AudioContext();
    analyser = audioContext.createAnalyser();
    // analyser.fftsize = 256;
    var source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audio.play();
}

function draw() {
    requestAnimationFrame(draw);
    var freqByteData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqByteData);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 1; i < freqByteData.length; i += 10) {
        ctx.fillStyle = `orange`;
        ctx.fillRect(i, canvas.height - freqByteData[i] * 2, 10, canvas.height);
        ctx.strokeRect(i, canvas.height - freqByteData[i] * 2, 10, canvas.height);
    }
}
