import axios from 'axios'

const KEY = 'AIzaSyBqDtfC4xSK2pqf55zg54aSvG0fWaLwlws'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})
