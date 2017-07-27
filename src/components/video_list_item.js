import React, { Component } from 'react';

class VideoItem extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>{this.props.video.id.videoId}</div>
        );
    }
}

export default VideoItem;