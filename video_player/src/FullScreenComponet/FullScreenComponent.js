import React from "react"

const toggleFullScreen = (props) => {
    if (props.videoElement.current.requestFullscreen) {
      props.videoElement.current.requestFullscreen();
    } else if (props.videoElement.current.msRequestFullscreen) {
      props.videoElement.current.msRequestFullscreen();
    } else if (props.videoElement.current.mozRequestFullScreen) {
      props.videoElement.current.mozRequestFullScreen();
    } else if (props.videoElement.current.webkitRequestFullscreen) {
      props.videoElement.current.webkitRequestFullscreen();
    }
  };

  export default toggleFullScreen;