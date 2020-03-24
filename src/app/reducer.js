const initState = {
    user: null
};

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case 'APPLICATION_AUTH':
        case 'SIGN_UP_SESSION':
        case 'SING_IN_SUCCESS':
            return {
                ...state,
                user: action.payload
            };
        case 'APPLICATION__SIGN_OUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}
