import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const dataOnStart=localStorage.getItem("videoplayer-current-time")
if (dataOnStart) {
     player.setCurrentTime(dataOnStart)
}
player.on('timeupdate', throttle(takeValueSeconds, 1000));

function takeValueSeconds(data) {
     localStorage.setItem("videoplayer-current-time", Number.parseInt(data.seconds));
    }