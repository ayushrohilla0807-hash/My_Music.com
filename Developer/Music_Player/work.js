let progress = document.getElementById("progress");
let song  = document.getElementById("song");
let controls = document.getElementById("playIcon");
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function Playpause(){
    if(controls.classList.contains("fa-pause")){
        song.pause();
        controls.classList.remove("fa-pause");
        controls.classList.add("fa-play");
    }
    else{
        song.play();
        controls.classList.add("fa-pause");
        controls.classList.remove("fa-play");
    }
}


setInterval(()=>{
    progress.value = song.currentTime;
    currentTimeEl.innerText = formatTime(song.currentTime);
},500);


progress.onchange = function(){
    song.currentTime = progress.value;
    song.play();
    controls.classList.add("fa-pause");
    controls.classList.remove("fa-play");
}
function formatTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

    durationEl.innerText = formatTime(song.duration);
}