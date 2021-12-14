import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoID }) => {
  const opts = {
    width: '64%', // change only this variables
    height: '64%', // change only this variables
    playerVars: {
      autoplay: 0, // No autoplay
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return <YouTube videoId={videoID} opts={opts} onReady={onReady} />;
};

export default VideoPlayer;
