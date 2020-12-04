import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8888/v1'
});

export default api;