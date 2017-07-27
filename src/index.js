import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
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
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));