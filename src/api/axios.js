import axios from 'axios';

const axiosFeach = axios.create({
    baseURL: `${window.location.origin}/api/`,
    timeout: 5000,
    withCredentials: true
});
export default axiosFeach;
