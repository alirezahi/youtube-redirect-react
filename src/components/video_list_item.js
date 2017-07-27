import React, { Component } from 'react';

class VideoItem extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="col-md-4">
                <img src={this.props.video.snippet.thumbnails.default.url} />
                <iframe src={"https://www.youtube.com/embed/"+this.props.video.id.videoId}></iframe>
                <button className="btn btn-danger">hello</button>
            </div>
        );
    }
}

export default VideoItem;