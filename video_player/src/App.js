import React, { useRef, useEffect, useState } from "react";
import secondsToTime from "./helpers/functions";
import buttons from "./helpers/buttons";
import toggleFullScreen from "./FullScreenComponet/FullScreenComponent";

import "./App.css";
import "./flexboxgrid.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [videoCurrentTime, setVideoTime] = useState(0 + ":" + 0 + ":" + 0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [mouseInside, setMouseInside] = useState(false);
  const [videoVolume, setVideoVolume] = useState("0.2");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoElement = useRef(null);
  let playPauseBtn = buttons().playerPlayBtn;

  useEffect(() => {
    setLoading(false);
  }, []);

  const timeChangeHandler = () => {
    const videoCurrentTimeRaw = videoElement.current.currentTime;
    const videoCurrentTime = secondsToTime(videoCurrentTimeRaw);
    setVideoTime(videoCurrentTime.toString);
    setVideoProgress((videoCurrentTimeRaw / videoDuration) * 100);
  };

  const togglePlay = () => {
    if (isVideoPlaying) {
      videoElement.current.pause();
    } else {
      videoElement.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleStop = () => {
    videoElement.current.pause();
    videoElement.current.currentTime = 0;
    setIsVideoPlaying(false);
  };

  if (loading) {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-8 col-xs-offset-2">Loading...</div>
        </div>
      </div>
    );
  }

  const metaDataLoadHandler = () => {
    const videoDuration = videoElement.current.duration;
    setVideoDuration(videoDuration);
  };

  const volumeChangeHandler = (event) => {
    setVideoVolume(event.target.value);
    videoElement.current.volume = videoVolume;
    console.log(videoVolume);
  };

  const mouseEnterHandler = () => {
    setMouseInside(true);
    
    console.log("mouse entered");
  };

  const mouseLeaveHandler = () => {
    setMouseInside(false);
    console.log("mouse left");
  };

  const toggleFullScreenHandler = () => {
    if (videoElement.current.requestFullscreen) {
      videoElement.current.requestFullscreen();
    } else if (videoElement.current.msRequestFullscreen) {
      videoElement.current.msRequestFullscreen();
    } else if (videoElement.current.mozRequestFullScreen) {
      videoElement.current.mozRequestFullScreen();
    } else if (videoElement.current.webkitRequestFullscreen) {
      videoElement.current.webkitRequestFullscreen();
    }
  }

  if (isVideoPlaying) {
    playPauseBtn = buttons().playerPauseBtn;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-xs-8 col-xs-offset-2"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <video
              id="videoPlayer"
              ref={videoElement}
              className="video"
              onTimeUpdate={timeChangeHandler}
              onLoadedMetadata={metaDataLoadHandler}
            >
              <source
                src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
        <div className="col-xs-8 col-xs-offset-2 controls" id="controlPanel">
          <div className="row between-xs">
            <div className="playBtn" onClick={togglePlay}>
              {buttons().playerPlayBtn}
            </div>
            <div className="stopBtn" onClick={toggleStop}>
              {buttons().playerStopBtn}
            </div>
            <input
              className="volumeSlider"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.001"
              value={videoVolume}
              onChange={volumeChangeHandler}
            ></input>
            <div className="col-xs-2 videoTime">
              {videoCurrentTime} / {secondsToTime(videoDuration).toString}
            </div>
            <div className="progress col-xs-5">
              <div
                className="progressBar"
                style={{ width: videoProgress + "%" }}
              />
            </div>
            <div className="col-xs-1 ">
              <div onClick={toggleFullScreenHandler}>
                {buttons().playerFullScreenBtn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
1. izveidojam layout
2. video
3. video html
4. play/ pause
5. laiks
6.progress
7. skanu regulejums 

fullscreen, half screen
..navigation



pogas vieta svg ikonas
ieslegt izslegt skanu 
fullscreen 
stop poga 
*/
