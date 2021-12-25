import axios from 'axios';

// can only be used in localhost:3000
const KEY = "AIzaSyDm81iR6rqh9dyAgHgSupBaFKk3VUruQmI";

// setup axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});