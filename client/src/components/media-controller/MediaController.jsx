import React from 'react';
import MediaTypesEnum from '../../types/MediaTypesEnum';
import VideoPlayer from '../video-player/VideoPlayer.jsx';

const MediaController = ({ matchedURL }) => {
  const mediaType = 'VIDEO';

  function youtubeParser(url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }

  const videoID = matchedURL && youtubeParser(matchedURL);

  const getMediaContainer = () => {
    switch (mediaType) {
      case MediaTypesEnum.VIDEO:
        return <VideoPlayer videoID={videoID} />;
      case MediaTypesEnum.IMAGE:
        return <>img</>;
      case MediaTypesEnum.CODE_SNIPPET:
        return <>Code</>;
      default:
        return null;
    }
  };

  return <div className="media-controller-wrapper">{getMediaContainer()}</div>;
};

export default MediaController;
