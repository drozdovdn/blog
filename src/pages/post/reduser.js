const initState = {
    data: null
};

export default function postReduser(state=initState, action) {
        switch (action.type) {
            case 'POST_PAGE_GET_DATA_SUCCESS':
                return {
                    ...state,
                    data: action.payload
                };
            case 'POST_UNMOUNT':
                return {
                  ...initState
                };
            default:
                return state;
        }    
}