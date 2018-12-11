import React, {Component} from 'react'

const urlBasicInfo = "https://www.youtube.com/embed/"

class VideoDetails extends Component {
    render() {
        let urlget = urlBasicInfo + this.props.videoId
        return (
            <div className="video-detail col-md-8 mb-3">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src={urlget}></iframe>
                </div>
                <div className="contents">
                    {/* <h5 className="title">{video.snippet.title}</h5>
                    <p className="writter">{video.snippet.channelTitle}</p> */}
                </div>
            </div>
        )
    }
}

export default VideoDetails;
