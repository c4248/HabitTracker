import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://planner-7d357.firebaseio.com/'
});

export default instance;