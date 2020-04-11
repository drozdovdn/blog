const initState = {
    dataUser: {},
    isShowModal: false
};

export default function myPageReduser(state=initState, action) {
        switch (action.type) {
            case 'GET_MY_PAGE_SUCCESS':
                return {
                    ...state,
                    dataUser: action.payload
                };
            case 'MODAL_CHANGE_CURRENT_PASSWORD_SUCCESS':
            case 'MY_PAGE_CREATE_FLAG_MODAL':
                return {
                  ...state,
                  isShowModal: !state.isShowModal
                };
            case 'MY_PAGE_UNMOUNT':
                return {
                  ...initState
                };
            default:
                return state;
        }
}