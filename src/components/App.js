import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

export default class App extends Component {
    state = { videos: [] }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        // response.data.items is array
        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/* Passing state as props*/}
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}
