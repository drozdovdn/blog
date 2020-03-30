import API from 'src/api';

export const getInitPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({offsetStep: 6});
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data})
        } catch (error) {
            dispatch({type:'MAIN_PAGE_INIT_GET_POSTS_FAIL'});
        }
    }
};

export const getScrollPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({offset: NPosts, offsetStep: 2});
            dispatch({type:'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data})
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