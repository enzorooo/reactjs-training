import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2NZNxv8KecAQTTsb_JMPFc67znfK4OCVrhNGsGJIXVY'
    }
});

