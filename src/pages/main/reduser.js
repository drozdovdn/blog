const initState = {
    posts: []
};

export default function mainReduser(state = initState, action) {
    switch (action.type) {
        case'MAIN_PAGE_INIT_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload
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

        default:
            return state;
    }
}