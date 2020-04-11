import axiosFeach from './axios';


export function getCurrentPassword(data) {
    return axiosFeach({
        url: 'users/change/password/',
        method: 'PUT',
        data
    })
};