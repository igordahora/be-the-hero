import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.60.40.20:3333',
});

export default api;