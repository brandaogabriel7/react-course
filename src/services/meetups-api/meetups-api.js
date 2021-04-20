import axios from 'axios';

const MEETUPS_API_BASE_URL = 'https://meetups-react-app-default-rtdb.firebaseio.com/';

const instance = axios.create({
    baseURL: MEETUPS_API_BASE_URL
});

export default instance;