import axiosFetch from './axios';

export function getMyPage(id) {
    return axiosFetch({
        url: `users/${id}`,
        method: 'GET'
    })
}