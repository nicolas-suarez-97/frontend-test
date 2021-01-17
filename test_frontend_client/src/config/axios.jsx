import axios from 'axios';

const axiosclient = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export default axiosclient;