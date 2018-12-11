import React from 'react';
import VideoItem from './VideoItem'

const VideoList = (props) => {

  const videoItems = props.videos.map(video => {
    return (
      <VideoItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video}
      />
    )
  });

  return (
    <div className="col-md-4">
      {videoItems}
    </div>
  )

};


export default VideoList;
