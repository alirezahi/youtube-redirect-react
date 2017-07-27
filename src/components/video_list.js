import React, { Component } from 'react';
import VideoItem from './video_list_item';

class VideoList extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <ul>{this.props.videos.map((video) => {
            return <VideoItem video={video} /> 
        })}</ul>
        );
    }
}

export default VideoList;