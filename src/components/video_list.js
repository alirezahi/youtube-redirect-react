import React, { Component } from 'react';
import VideoItem from './video_list_item';

class VideoList extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>{this.props.videos.map((video) => {
            return <VideoItem key={video.etag} video={video} /> 
        })}</div>
        );
    }
}

export default VideoList;