import axiosFetch from './axios';

export function singIn(data) {
    return axiosFetch({
        url: 'users/signin',
        method: 'POST',
        data: data
    });
}
export function signUp(data) {
    return axiosFetch({
        url: 'users/signup',
        method: 'POST',
        data: data
    });
}
export function auth(data) {
    return axiosFetch({
        url: 'users/auth',
        method: 'GET'
    })
}
export function signOut(data) {
    return axiosFetch({
        url: 'users/signout',
        method: 'GET'
    })
}

export function checkLogin(login) {
    return axiosFetch({
        url: 'users/check-exists',
        method: 'POST',
        data: { login}
    })
    
}