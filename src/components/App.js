import React, { usetState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyBqDtfC4xSK2pqf55zg54aSvG0fWaLwlws'

const App = () => {
    const [video, setVideo] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        this.onTermSubmit('korea')
    }, [])

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            },
        })

        setVideos(response.data.items)
        setSelectedVideo(reponse.data.items[0])
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        {/* Passing state as props*/}
                        <VideoList
                            onVideoSelect={(video) => setSelectedVideo(video)}
                            videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App