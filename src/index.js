import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoItem from './components/video_list_item';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyBcO12SxG_zO6l_Zgjgo-3OBrgudQ5OEOg";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos : [] };

        YTSearch({key:API_KEY, term:'book'}, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return (<div>
        <SearchBar />
         <VideoList videos={this.state.videos}/> 
         {this.state.videos.length}
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));