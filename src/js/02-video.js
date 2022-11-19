import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const VIDEO_CURRENT_TIME_KEY = "videoplayer-current-time";

let currentTime = JSON.parse(localStorage.getItem(VIDEO_CURRENT_TIME_KEY));

if (currentTime !== null) {
  player.setCurrentTime(currentTime.seconds);
}

const onPlay = function () {
  console.log("player has been started");
};

const setTime = function (data) {
  localStorage.setItem(VIDEO_CURRENT_TIME_KEY, JSON.stringify(data));
};

player.on("play", onPlay);
player.on("timeupdate", throttle(setTime, 1000));
