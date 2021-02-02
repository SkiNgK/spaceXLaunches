import axios from 'axios';

let api = axios.create({
        baseURL: 'https://api.spacexdata.com/v3/',
    });

export default api;