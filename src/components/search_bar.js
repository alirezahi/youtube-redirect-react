import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };
        this.OnChangeOperation = this.OnChangeOperation.bind(this);
    }
    render() {
        return (
            <div>
                <input onChange={this.OnChangeOperation} />
                Value : {this.state.term}
            </div>
        );
    }

    OnChangeOperation(event) {
        this.setState( {
            term : event.target.value
        } );
    }
}

export default SearchBar;