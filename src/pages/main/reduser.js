const initState = {
    posts: [],
    isLoadingPosts: false,
    nPosts: 10
};

export default function mainReduser(state = initState, action) {
    switch (action.type) {
        case 'MAIN_PAGE_INIT_GET_POSTS_REQUEST':
            return {
                ...state,
                isLoadingPosts: true
            };
        case'MAIN_PAGE_INIT_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload.data,
                isLoadingPosts: false,
                nPosts: action.payload.nPosts
            };
        case 'MAIN_PAGE_INIT_GET_POSTS_FAIL':
            return {
                ...state,
                isLoadingPosts: false
            };
        case 'MAIN_PAGE_UNMOUNT':
            return {
                ...initState
            };

        case 'POST_DISLIKE_ADD_SUCCESS':
        case 'POST_LIKE_ADD_SUCCESS':
            const {posts} = state;
            let findItem = posts.findIndex(el => el.id === action.id);
            return {
                ...state,
                posts: [
                    ...state.posts.slice(0,findItem),
                    action.payload,
                    ...state.posts.slice(findItem+1)
                ]
            };
        case 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST':
            return {
            ...state,
                isLoadingPosts: true
            };
        case 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS':
            if(state.isLoadingPosts === true) {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    ...action.payload.data
                ],
                isLoadingPosts: false,
                nPosts: action.payload.nPosts
            }}
        case 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL':
            return {
                ...state,
                isLoadingPosts: false
            };
        default:
            return state;
    }
}