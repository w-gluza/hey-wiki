import React, { useState, useEffect } from "react";
import MediaTypesEnum from "../../types/MediaTypesEnum";
import VideoPlayer from "../video-player/VideoPlayer.jsx";

const MediaController = ({ matchedURL }) => {
  const [mediaType, setMediaType] = useState(undefined);

  function youtubeParser(url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  }

  const videoID = matchedURL && youtubeParser(matchedURL);

  useEffect(() => {
    if (videoID && typeof videoID === 'string') {
      setMediaType(MediaTypesEnum.VIDEO)
    }
  }, [videoID]);

  console.log("videoID", videoID);
  const getMediaContainer = () => {
    switch (mediaType) {
      case MediaTypesEnum.VIDEO:
        return <VideoPlayer videoID={videoID} />;
      case MediaTypesEnum.IMAGE:
        return <>img</>;
      default:
        return null;
    }
  };

  return <div className="media-controller-wrapper">{getMediaContainer()}</div>;
};

export default MediaController;
