import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBcO12SxG_zO6l_Zgjgo-3OBrgudQ5OEOg";

const App = function (){
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));