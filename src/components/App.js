import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

export default class App extends Component {

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}
