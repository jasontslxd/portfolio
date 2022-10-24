import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
console.log(process.env)

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})