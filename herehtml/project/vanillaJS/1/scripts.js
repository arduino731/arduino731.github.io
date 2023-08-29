const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangeButtons = player.querySelectorAll('.player__slider');
const magnifying = player.querySelector('.magnifying');
let playPause = false;
let resize = false;

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method](); 
}

function updateButton() {
    playPause = !playPause;
    if(playPause){
        toggle.textContent = '✋';
    }else{
        toggle.textContent = '🤙';
    }
}

function skipButton() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(){
    video[this.name] = this.value;
    // console.log(this.name);
    // console.log(this.value);
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function magnifyingGlass(e){
    resize = !resize;
    if(resize){
        player.style.minWidth = '100%';
    }else{
        player.style.minWidth = '0%';
    }
    
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(skip => skip.addEventListener('click', skipButton));
rangeButtons.forEach(range => range.addEventListener('change', handleRange))
rangeButtons.forEach(range => range.addEventListener('mousemove', handleRange))

let scrubControl = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
    if(scrubControl){
        scrub(e)
    }
});
progress.addEventListener('mousedown', () => scrubControl = true) ;
progress.addEventListener('mouseup', () => scrubControl = false);
magnifying.addEventListener('click', magnifyingGlass);