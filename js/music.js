// Add js here.
var mus = document.getElementById('music');
var playPause = document.getElementById('playBtn');
var count = 0;

function play() {
    if(count == 0){
        count = 1;
        mus.play();
        playPause.innerHTML = 'Pause';
    }
    else{
        count = 0;
        mus.pause();
        playPause.innerHTML = 'Play';
    }
}

function stop() {
    play()
    mus.pause();
    mus.currentTime = 0;
}
