import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;

  return (
    <div className="video-item mb-2 " onClick={() => onVideoSelect(video)}>
      <div className="video-img">
        <img src={imageUrl} />
      </div>
      <div className="video-body p-3">
        <h5 className="title">{video.snippet.title}</h5>
        <p className="writter">{video.snippet.channelTitle}</p>
      </div>
    </div>
  )
};

export default VideoItem;
