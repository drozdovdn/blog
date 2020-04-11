import API from 'src/api';

export const getInitPostsAction = (nPosts) => {
    return async function (dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({ offsetStep: nPosts});
            nPosts = response.data.length;
            const data = response.data;
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: {data, nPosts}});
        } catch (error) {
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_FAIL'});
        }
    }
};

export const getScrollPostsAction = (nPosts) => {
    return async function (dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({offset: nPosts, offsetStep: 2});
            nPosts = nPosts + response.data.length;
            const data =  response.data;
            dispatch({type:'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: {data, nPosts}});
        } catch (error) {
            dispatch({type:'MAIN_PAGE_SCROLL_GET_POSTS_FAIL'});
        }
    }
};

export const addLikePostAction = (id) => {
    return async function (dispatch) {
        try {
            const response = await API.posts.addLikPost(id);
            dispatch({type: 'POST_LIKE_ADD_SUCCESS', payload: response.data , id: id});
        } catch (error) {
            dispatch({type: 'POST_LIKE_ADD_FAIL'});
        }
    }
};
export const addDislikePostAction = (id) => {
    return async function (dispatch) {
        try {
            const response = await API.posts.addDislikePost(id);
            dispatch({type: 'POST_DISLIKE_ADD_SUCCESS', payload: response.data , id: id});
        } catch (error) {
            dispatch({type: 'POST_DISLIKE_ADD_FAIL'});
        }
    }
};

export const getUnmountAction = () => {
    return  ({
        type: 'MAIN_PAGE_UNMOUNT'
    })
};
