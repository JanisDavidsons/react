import play from "../assets/playerPlay.svg";
import pause from "../assets/playerPause.svg";
import stop from "../assets/playerStop.svg";
import fullScreen from "../assets/fullScreen.svg";
import React from "react";

const buttons = () => {
  let buttonsObj = {
    playerStopBtn: <img src={stop} className="stopBtn" alt="stop button"></img>,
    playerPlayBtn: <img src={play} className="playBtn" alt="play button"></img>,
    playerPauseBtn: <img src={pause} className="pauseBtn" alt="pause button"></img>,
    playerFullScreenBtn: <img src={fullScreen} className="fullScreen" alt="full screen button"></img>
  };
  return buttonsObj;
};

export default buttons;